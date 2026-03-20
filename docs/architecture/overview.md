---
sidebar_position: 1
sidebar_label: Overview
---

# Architecture Overview

GhostAgent is a distributed system designed for real-time AI-powered call center operations. This document covers the system design, data flow, and scaling strategy.

## System Components

```
┌──────────────────────────────────────────────────────────────────┐
│                        EXTERNAL SERVICES                         │
│                                                                  │
│  Vonage (telephony)              ElevenLabs (AI agent)          │
│  ├─ SIP/PSTN call handling       ├─ Conversational AI           │
│  ├─ Audio WebSocket streaming    ├─ Speech-to-text              │
│  └─ Call lifecycle webhooks      ├─ Text-to-speech              │
│                                   └─ MCP tool execution          │
└────────────┬─────────────────────────────┬──────────────────────┘
             │                             │
             ▼                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                    GATEWAY (Node.js)                              │
│                                                                  │
│  ├─ ConnectionManager    — Session lifecycle & CSR rooms         │
│  ├─ ElevenLabsClient     — Persistent outbound WebSocket        │
│  ├─ VonageRouter         — Webhook receiver & NCCO generation   │
│  ├─ ControlRouter        — REST API for Laravel                 │
│  ├─ RedisAdapter         — Multi-node pub/sub (optional)        │
│  └─ CSR WebSocket Server — Frontend real-time connections       │
│                                                                  │
│  Port: 8080                                                      │
└────────────┬─────────────────────────────┬──────────────────────┘
             │                             │
             ▼                             ▼
┌───────────────────────┐    ┌────────────────────────────────────┐
│   LAUNCHPAD (Laravel)  │    │        FRONTEND (React 19)         │
│                        │    │                                    │
│  ├─ Auth & RBAC        │    │  ├─ Live call dashboard            │
│  ├─ User management    │    │  ├─ Conversation history           │
│  ├─ Compliance engine  │    │  ├─ Policy management              │
│  ├─ Policy management  │    │  ├─ Compliance evaluation          │
│  ├─ Token management   │    │  ├─ User/role management           │
│  ├─ MCP tool execution │    │  ├─ A/B testing                    │
│  └─ Activity logging   │    │  └─ Feedback queue                 │
│                        │    │                                    │
│  Port: 80/443          │    │  Port: 3005                        │
└───────────┬────────────┘    └────────────────────────────────────┘
            │
            ▼
┌───────────────────────┐
│   PostgreSQL 16        │
│   Port: 45432          │
└────────────────────────┘
```

## Call Flow

### 1. Incoming Call

```
Customer dials → Vonage receives call
    → Vonage webhook POST /vonage/webhooks/answer → Gateway
    → Gateway returns NCCO (connect audio to WebSocket)
    → Vonage opens audio WebSocket to Gateway
```

### 2. AI Agent Processing

```
Vonage audio stream → Gateway → ElevenLabs agent
    → ElevenLabs processes speech → returns transcript turns
    → ElevenLabs generates response → returns agent audio
    → ElevenLabs requests tool call → Gateway forwards to Laravel
    → Laravel executes tool → result flows back through Gateway → ElevenLabs
```

### 3. CSR Real-time Updates

```
All events (transcript, thinking, tool calls, state changes)
    → Gateway broadcasts via WebSocket rooms
    → Frontend React dashboard updates in real-time
```

### 4. Call End

```
Call terminates (customer hangs up, CSR ends, timeout)
    → Vonage webhook POST /vonage/webhooks/event (status: completed)
    → Gateway updates session state → broadcasts call_ended
    → Gateway closes ElevenLabs connection → cleans up session
```

## Communication Patterns

| From     | To         | Protocol             | Purpose                          |
| -------- | ---------- | -------------------- | -------------------------------- |
| Vonage   | Gateway    | HTTP webhook         | Call lifecycle events            |
| Vonage   | Gateway    | WebSocket            | Audio streaming                  |
| Gateway  | ElevenLabs | WebSocket (outbound) | AI agent conversation            |
| Laravel  | Gateway    | HTTP REST            | Session management, tool results |
| Gateway  | Laravel    | HTTP webhook         | Tool call forwarding             |
| Gateway  | Frontend   | WebSocket (inbound)  | Real-time event broadcast        |
| Frontend | Gateway    | WebSocket            | CSR actions (accept/reject/end)  |
| Frontend | Laravel    | HTTP REST            | CRUD operations, auth            |

## Why This Split?

**Laravel handles request/response work** — auth, CRUD, compliance evaluation, policy management. PHP-FPM is perfect for this: each request is independent, stateless, and short-lived.

**Node.js handles persistent connections** — WebSocket rooms, audio streaming, external service WebSockets. Node's event loop manages thousands of concurrent connections without blocking.

**Trying to run persistent WebSockets through PHP-FPM would fail** because each FPM worker is tied up for the entire connection duration. A 30-minute phone call would block a worker for 30 minutes. With 200 concurrent calls, you'd need 600+ FPM workers just for WebSockets.
