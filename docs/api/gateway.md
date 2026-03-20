---
sidebar_position: 4
sidebar_label: Gateway Control API
---

# Gateway Control API

The Gateway exposes a REST API that Laravel uses to manage call sessions. All endpoints require the `API_SECRET` bearer token.

## Sessions

### Create Session

```
POST /api/sessions
Authorization: Bearer <API_SECRET>
```

Creates a new call session, opens the ElevenLabs agent connection, and broadcasts `incoming_call_ringing` to the assigned CSR.

**Request Body:**

```json
{
  "callId": "vonage-call-uuid",
  "userId": "csr-user-id",
  "callerPhone": "+15551234567",
  "callerName": "John Doe",
  "meta": {
    "agentId": "optional-elevenlabs-agent-override"
  }
}
```

**Response:**

```json
{
  "sessionId": "uuid",
  "callId": "vonage-call-uuid",
  "userId": "csr-user-id",
  "callerPhone": "+15551234567",
  "callerName": "John Doe",
  "state": "ringing",
  "createdAt": 1710849600000
}
```

### List Sessions

```
GET /api/sessions
Authorization: Bearer <API_SECRET>
```

### Get Session

```
GET /api/sessions/:id
Authorization: Bearer <API_SECRET>
```

### Update Session State

```
PATCH /api/sessions/:id
Authorization: Bearer <API_SECRET>
```

**Request Body:**

```json
{
  "state": "active"
}
```

Valid states: `ringing`, `active`, `ended`

### Destroy Session

```
DELETE /api/sessions/:id
Authorization: Bearer <API_SECRET>
```

Closes ElevenLabs connection, broadcasts `call_ended`, and cleans up.

### Send Tool Result

```
POST /api/sessions/:id/tool-result
Authorization: Bearer <API_SECRET>
```

Forwards a tool call result back to the ElevenLabs agent.

**Request Body:**

```json
{
  "toolCallId": "tc_abc123",
  "result": {
    "status": "success",
    "data": {"account_name": "John Doe", "balance": 150.0}
  }
}
```

### Broadcast Event

```
POST /api/sessions/:id/broadcast
Authorization: Bearer <API_SECRET>
```

Send an arbitrary event to a session's CSR room.

**Request Body:** Any JSON — forwarded directly to all CSR WebSocket connections for that user.

## Health & Stats

### Health Check

```
GET /health
```

No auth required. Returns gateway status and connection counts.

**Response:**

```json
{
  "status": "ok",
  "activeSessions": 5,
  "csrRooms": 3,
  "csrConnections": 8,
  "sessions": {
    "ringing": 1,
    "active": 3,
    "ended": 1
  }
}
```

### Stats

```
GET /api/stats
Authorization: Bearer <API_SECRET>
```

Same data as health check, behind auth.

## API Key Authentication

The gateway supports scoped API keys in addition to the raw `API_SECRET`. Keys are prefixed with `mpk_` and carry specific scopes.

### Scopes

| Scope     | Access                                              |
| --------- | --------------------------------------------------- |
| `control` | Session management, stats, broadcast                |
| `webhook` | Webhook management                                  |
| `admin`   | All operations including key and webhook management |

### API Key Endpoints (admin scope)

#### List Keys

```
GET /api/keys
Authorization: Bearer <admin-key>
```

#### Create Key

```
POST /api/keys
Authorization: Bearer <admin-key>
```

```json
{
  "name": "Laravel Backend",
  "scopes": ["control", "webhook"]
}
```

Returns the full key (shown once only — copy it immediately).

#### Revoke Key

```
DELETE /api/keys/:id
Authorization: Bearer <admin-key>
```

## Webhooks

Register webhook endpoints to receive gateway events via HTTP POST. Events are signed with HMAC-SHA256 for verification.

### Register Webhook

```
POST /api/webhooks
Authorization: Bearer <admin-key>
```

```json
{
  "url": "https://your-app.com/api/gateway/events",
  "secret": "your-webhook-signing-secret",
  "events": ["session.*", "elevenlabs.*"]
}
```

### Event Patterns

| Pattern           | Matches            |
| ----------------- | ------------------ |
| `session.created` | Exact event match  |
| `session.*`       | All session events |
| `**`              | All events         |

### Webhook Delivery

Each delivery includes:

- **Body**: JSON event payload
- **Header**: `X-Signature` — HMAC-SHA256 hex digest of the body, signed with your webhook secret
- **Timeout**: 10 seconds
- **Auto-disable**: After 10 consecutive failures, the webhook is deactivated

### List Webhooks

```
GET /api/webhooks
Authorization: Bearer <admin-key>
```

### Remove Webhook

```
DELETE /api/webhooks/:id
Authorization: Bearer <admin-key>
```
