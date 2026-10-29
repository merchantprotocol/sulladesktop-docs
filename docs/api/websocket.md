---
sidebar_position: 5
sidebar_label: WebSocket Events
---

# WebSocket Events

The Gateway provides real-time WebSocket connections for CSR frontends.

## Connecting

```
ws://gateway-host:8080/ws/{userId}?role=FE&token={accessToken}
```

The `socket_url` is returned in the login response and points to the user's WebSocket room.

## Events (Server → Client)

### incoming_call_ringing

A new call is arriving for this CSR.

```json
{
  "event_type": "incoming_call_ringing",
  "session_id": "uuid",
  "call_id": "vonage-call-uuid",
  "user_id": "csr-user-id",
  "received_at": "2026-03-19T12:00:00Z",
  "customer": {
    "phone_e164": "+15551234567",
    "name": "John Doe"
  }
}
```

### call_started

Call has been accepted and is now active.

```json
{
  "event_type": "call_started",
  "session_id": "uuid",
  "call_id": "vonage-call-uuid",
  "timestamp": "2026-03-19T12:00:05Z"
}
```

### call_ended

Call has terminated.

```json
{
  "event_type": "call_ended",
  "session_id": "uuid",
  "call_id": "vonage-call-uuid",
  "vonage_status": "completed",
  "timestamp": "2026-03-19T12:15:30Z"
}
```

### transcript_turn

A new line of conversation — from the customer (via speech-to-text) or the AI agent.

```json
{
  "event_type": "transcript_turn",
  "session_id": "uuid",
  "call_id": "vonage-call-uuid",
  "speaker": "customer",
  "text": "Hi, I'd like to return my order from last week.",
  "timestamp": "2026-03-19T12:01:15Z"
}
```

### agent_thinking

The AI agent's internal reasoning process (visible to CSR for transparency).

```json
{
  "event_type": "agent_thinking",
  "session_id": "uuid",
  "call_id": "vonage-call-uuid",
  "text": "Customer wants to return an order. I should look up their account first.",
  "timestamp": "2026-03-19T12:01:17Z"
}
```

### mcp_tool_call

The AI agent is executing (or has executed) a tool via MCP.

```json
{
  "event_type": "mcp_tool_call",
  "session_id": "uuid",
  "call_id": "vonage-call-uuid",
  "tool_call_id": "tc_abc123",
  "tool_name": "lookup_account",
  "input": {"phone": "+15551234567"},
  "state": "pending",
  "timestamp": "2026-03-19T12:01:18Z"
}
```

States: `pending` → `completed` or `failed`

### user_contextual_message

Context messages from the system (e.g., refund processed, escalation notes).

```json
{
  "event_type": "user_contextual_message",
  "text": "CSR ACTION: REFUND ACCEPT Refund of USD 50.00 initiated for Order #12345",
  "timestamp": "2026-03-19T12:10:00Z",
  "meta": {"from": "admin"}
}
```

### health_ping

Connection keepalive, sent every 30 seconds.

```json
{
  "event_type": "health_ping",
  "timestamp": 1710849600000
}
```

## Events (Client → Server)

### call_accept

CSR accepts an incoming call.

```json
{
  "event_type": "call_accept",
  "session_id": "uuid"
}
```

### call_reject

CSR rejects an incoming call.

```json
{
  "event_type": "call_reject",
  "session_id": "uuid"
}
```

### call_end

CSR ends an active call.

```json
{
  "event_type": "call_end",
  "session_id": "uuid"
}
```

## Reliable Delivery Protocol

Standard WebSocket clients work as shown above — connect, receive events, send actions. No changes needed.

For clients that need guaranteed message delivery (no dropped events), the gateway supports an optional reliable delivery handshake.

### Enabling Reliable Delivery

After connecting and receiving the `connected` welcome message, send:

```json
{
  "event_type": "capabilities",
  "reliable_delivery": true
}
```

The server confirms:

```json
{
  "event_type": "capabilities_ack",
  "reliable_delivery": true,
  "connection_id": "a1b2c3d4e5f6g7h8",
  "timestamp": "2026-03-19T12:00:00Z"
}
```

### Acknowledging Messages

Once reliable delivery is enabled, every server event includes a `_msg_id` field. Your client must acknowledge each message within 5 seconds:

```json
{
  "event_type": "ack",
  "_msg_id": "f8a3b2c1"
}
```

If the server doesn't receive your ACK in time, it retries up to 3 times before dropping the message.

### Receipt Confirmation

When you send any message (like `call_accept`), the server confirms receipt:

```json
{
  "event_type": "message_received",
  "received_event": "call_accept",
  "timestamp": "2026-03-19T12:00:01Z"
}
```

Standard clients do not receive receipt confirmations.

### Connection Welcome Message

Every new WebSocket connection receives a welcome message immediately on connect:

```json
{
  "event_type": "connected",
  "connection_id": "a1b2c3d4e5f6g7h8",
  "timestamp": "2026-03-19T12:00:00Z",
  "protocol": {
    "version": 1,
    "reliable_delivery_available": true,
    "ack_timeout_ms": 5000,
    "max_retries": 3
  }
}
```

Standard clients can safely ignore the `protocol` field.
