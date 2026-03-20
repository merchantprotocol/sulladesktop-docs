---
sidebar_position: 2
sidebar_label: Live Dashboard
---

# Live Call Dashboard

The dashboard is the primary CSR interface for monitoring and managing live calls. It uses a WebSocket connection to receive real-time events from the Gateway.

## Layout

The dashboard uses a three-column responsive layout:

```
┌─────────────┬──────────────────────┬─────────────────┐
│  Left Side  │       Center         │   Right Side    │
│             │                      │                 │
│ Customer    │  Live Transcript     │ Agent Actions   │
│ Info Card   │  (scrolling feed)    │ (tool calls)    │
│             │                      │                 │
│ Sentiment   │                      │ Agent Thinking  │
│ Card        │                      │ (AI reasoning)  │
│             │                      │                 │
│ Categories  │  Call Controls       │ Activity Feed   │
│ Card        │  (accept/reject/end) │                 │
└─────────────┴──────────────────────┴─────────────────┘
```

## Components

### Customer Info Card

Displays caller information extracted from the `lookup_account` tool call:

- Customer name
- Customer ID
- Phone number (E.164)
- Email address

### Live Transcript Card

Real-time scrolling transcript showing each conversation turn:

- Speaker identification (customer vs. agent)
- Timestamped entries
- Auto-scroll to latest

### Agent Thinking Card

Visualizes the AI agent's internal reasoning process. Shows what the agent is "thinking" before responding, giving the CSR transparency into the AI's decision-making.

### Agent Actions Card

Tracks all MCP tool calls the AI agent makes during the call:

- Tool name and input parameters
- Execution state (pending, completed, failed)
- Output/result data
- Duration metrics

### Customer Sentiment Card

Real-time sentiment analysis showing how the customer's mood is trending during the call.

### Call Controls

- **Accept** — Accept an incoming call
- **Reject** — Reject an incoming call
- **End** — Terminate an active call
- **Call duration timer** — Running time of the active call

### Incoming Call Modal

When a new call arrives, a modal overlay shows:

- Caller phone number
- Caller name (if available)
- Accept/Reject buttons

### Activity Feed

Chronological log of all events during the call — tool calls, context messages, state changes.

## WebSocket Connection

The dashboard connects to the Gateway WebSocket on mount:

```
ws://gateway-host:8080/ws/{userId}?role=FE&token={accessToken}
```

See [WebSocket Events](../api/websocket.md) for the full event reference.

## State Management

Dashboard state is managed via React's `CallProvider` context:

- `callActive` — Whether a call is currently in progress
- `callDuration` — Running timer
- `callerInfo` — Customer details from account lookup
- `toolCalls` — Array of tool call events
- `agentThought` — Latest agent thinking text
- `transcript` — Full conversation transcript
- `activityFeed` — All events for the activity feed
