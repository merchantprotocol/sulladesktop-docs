---
sidebar_position: 4
sidebar_label: Call Monitoring
---

# Live Call Monitoring

The Call Monitoring page provides real-time visibility into active and recent calls. CSRs and supervisors can watch live transcripts as conversations happen.

## Accessing Call Monitor

Navigate to **Calls** from the main menu. The call monitor shows all calls for your team.

## Call List

The main view displays calls as cards with:

- **Caller name** and phone number
- **Status badge** — Ringing (yellow), Active (green), Ended (gray)
- **Assigned CSR** name
- **Duration** or time since creation

### Filtering

Use the filter buttons to switch between:

- **Active** — Currently ringing or in-progress calls (default)
- **All** — All calls including recently ended
- **Ended** — Completed calls only

The list updates automatically when calls start, change status, or end — no manual refresh needed.

## Live Transcript

Click any call card to open the transcript view. This is a chat-style interface showing the conversation in real-time.

### Message Types

| Speaker  | Display                  | Description                           |
| -------- | ------------------------ | ------------------------------------- |
| Customer | Left side, blue avatar   | What the caller said (speech-to-text) |
| Agent    | Right side, green avatar | AI agent's spoken responses           |
| System   | Centered, gray           | Tool calls, status changes            |

### Live Updates

The transcript connects directly to the gateway for zero-latency updates:

- New messages appear instantly as they're spoken
- A **typing indicator** shows when the AI agent is thinking
- Messages are timestamped to the second
- The view auto-scrolls to the latest message

### Connection Status

The bottom bar shows:

- **Live** (green dot) — Connected and receiving updates
- **Disconnected** (red dot) — Connection lost, auto-reconnecting
- **Message count** — Total messages in the conversation

### Reliable Delivery

The transcript client uses the gateway's reliable delivery protocol. This means:

- Every message is acknowledged
- If a message is missed, the gateway retries automatically
- No transcript lines are silently dropped

### History

When you open a call transcript, the full conversation history loads from the database first. Live messages then appear on top of the history, with automatic deduplication so you never see the same message twice.

## Starting a Call

To initiate a new outbound call:

1. Click the **New Call** button
2. Enter the phone number and optional caller name
3. The system creates a gateway session and begins ringing

## Ending a Call

From the transcript view, the call can be ended by the CSR or automatically when the caller hangs up. Once ended, the transcript remains accessible in the **Ended** filter for review.
