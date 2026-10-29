---
sidebar_position: 3
sidebar_label: Actions
---

# Actions API

Actions are operations the AI agent can perform during calls via MCP tool calls. These endpoints are called by the gateway when the AI agent requests a tool execution.

## Refund Actions

### Process Refund

```
POST /api/actions/refund/process
Authorization: Bearer <access_token>
```

Approve and process a refund request. Connects to the external orders/payments database (Supabase) to initiate the refund.

**Request Body:**

```json
{
  "order_id": "12345",
  "amount": 50.0,
  "currency": "USD",
  "reason": "Customer requested refund for defective product"
}
```

**Response:**

```json
{
  "status": "approved",
  "refund_id": "ref_abc123",
  "message": "Refund of USD 50.00 initiated for Order #12345"
}
```

A WebSocket broadcast is sent to the CSR room:

```json
{
  "event_type": "user_contextual_message",
  "text": "CSR ACTION: REFUND ACCEPT Refund of USD 50.00 initiated for Order #12345",
  "timestamp": "2026-03-19T12:34:56Z",
  "meta": {"from": "admin"}
}
```

### Deny Refund

```
POST /api/actions/refund/deny
Authorization: Bearer <access_token>
```

**Request Body:**

```json
{
  "order_id": "12345",
  "reason": "Outside return window"
}
```

## MCP Tool Call Flow

When the AI agent (ElevenLabs) decides to execute a tool:

1. ElevenLabs sends `tool_call` event → Gateway receives it
2. Gateway broadcasts `mcp_tool_call` (state: pending) to CSR frontend
3. Gateway forwards tool call to Laravel via `POST /api/gateway/tool-call`
4. Laravel executes the action (refund, account lookup, etc.)
5. Laravel sends result back to Gateway via `POST /api/sessions/:id/tool-result`
6. Gateway forwards result to ElevenLabs agent
7. Gateway broadcasts `mcp_tool_call` (state: completed) to CSR frontend

```
ElevenLabs Agent
    ↓ tool_call
Gateway (Node.js)
    ├─→ broadcast to CSR (pending)
    └─→ POST to Laravel
            ↓ execute action
        Laravel
            ↓ result
        Gateway
            ├─→ send to ElevenLabs
            └─→ broadcast to CSR (completed)
```
