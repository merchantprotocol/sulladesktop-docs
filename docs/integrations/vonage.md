---
sidebar_position: 2
sidebar_label: Vonage
---

# Vonage Integration

Vonage provides the telephony layer — handling SIP/PSTN call routing, audio streaming, and call lifecycle management.

## Webhook Endpoints

Configure these in the Vonage dashboard for your application:

| Webhook    | Gateway Endpoint               | Purpose               |
| ---------- | ------------------------------ | --------------------- |
| Answer URL | `POST /vonage/webhooks/answer` | Incoming call arrived |
| Event URL  | `POST /vonage/webhooks/event`  | Call state changed    |

## Answer Webhook

When a call arrives, Vonage hits the answer webhook. The Gateway responds with an NCCO (Nexmo Call Control Object) that tells Vonage to connect the call audio to a WebSocket:

```json
[
  {
    "action": "connect",
    "endpoint": [
      {
        "type": "websocket",
        "uri": "wss://gateway-host:8080/vonage/audio/{callId}",
        "content-type": "audio/l16;rate=16000"
      }
    ]
  }
]
```

## Event Webhook

Call state changes trigger event webhooks:

| Vonage Status | GhostAgent State | Event                   |
| ------------- | ---------------- | ----------------------- |
| `ringing`     | `ringing`        | `incoming_call_ringing` |
| `answered`    | `active`         | `call_started`          |
| `completed`   | `ended`          | `call_ended`            |
| `busy`        | `ended`          | `call_ended`            |
| `cancelled`   | `ended`          | `call_ended`            |
| `failed`      | `ended`          | `call_ended`            |
| `rejected`    | `ended`          | `call_ended`            |
| `timeout`     | `ended`          | `call_ended`            |

## Audio WebSocket

Once the NCCO is returned, Vonage opens a WebSocket to the Gateway at:

```
wss://gateway-host:8080/vonage/audio/{callId}
```

The Gateway:

1. Receives raw PCM audio from Vonage (customer speech)
2. Forwards it to ElevenLabs for processing
3. Receives agent audio from ElevenLabs
4. Sends it back through the Vonage WebSocket to the caller

Audio format: `audio/l16;rate=16000` (16-bit linear PCM, 16kHz sample rate)

## Configuration

```bash
# .env (Gateway)
VONAGE_API_KEY=your-api-key
VONAGE_API_SECRET=your-api-secret
VONAGE_APPLICATION_ID=your-app-id
VONAGE_PRIVATE_KEY_PATH=/path/to/private.key
```

## Call Flow

```
1. Customer dials your Vonage number
2. Vonage POST /vonage/webhooks/answer
3. Gateway returns NCCO → connect audio to WebSocket
4. Vonage opens wss://gateway/vonage/audio/{callId}
5. Audio streams bidirectionally
6. Call ends → Vonage POST /vonage/webhooks/event (status: completed)
7. Gateway cleans up session
```

## Alternative IVR Providers

The frontend includes configuration cards for:

- **RingCentral** — Available on `feature/ringcentral-integration` branch
- **Talkdesk** — Available on `feature/talkdesk-integration` branch

These follow the same pattern but use provider-specific SDKs and webhook formats.
