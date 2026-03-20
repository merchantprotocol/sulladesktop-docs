---
sidebar_position: 1
sidebar_label: ElevenLabs
---

# ElevenLabs Integration

GhostAgent uses ElevenLabs Conversational AI as the AI agent that handles live calls. The Gateway maintains a persistent WebSocket connection to ElevenLabs for each active call.

## How It Works

1. A call arrives via Vonage
2. The Gateway opens a WebSocket to ElevenLabs: `wss://api.elevenlabs.io/v1/convai/conversation?agent_id={agentId}`
3. Audio from Vonage is forwarded to ElevenLabs in real-time
4. ElevenLabs processes speech, generates responses, and executes tool calls
5. Events (transcripts, thinking, tool calls) are broadcast to the CSR dashboard

## Events from ElevenLabs

| Event Type                       | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `transcript` / `transcript_turn` | Speech-to-text output from customer or agent     |
| `agent_thinking` / `thinking`    | AI agent's internal reasoning                    |
| `tool_call` / `mcp_tool_call`    | Agent requests execution of an MCP tool          |
| `agent_response`                 | Agent's spoken response text                     |
| `audio`                          | Audio chunks (agent speech, forwarded to Vonage) |

## MCP Tool Calls

ElevenLabs agents can execute tools via the Model Context Protocol. When a tool call is requested:

1. ElevenLabs sends a `tool_call` event with tool name and input
2. Gateway broadcasts it to the CSR (state: pending)
3. Gateway forwards it to Laravel for execution
4. Laravel runs the tool (account lookup, refund, etc.)
5. Laravel sends the result back to Gateway
6. Gateway forwards the result to ElevenLabs via `tool_result` message
7. ElevenLabs incorporates the result into the conversation

### Available Tools

| Tool             | Description                                    |
| ---------------- | ---------------------------------------------- |
| `lookup_account` | Look up customer by phone number or account ID |
| `process_refund` | Approve and process a refund                   |
| `deny_refund`    | Deny a refund request                          |

Additional tools are defined in the Laravel MCP module and can be extended.

## Configuration

```bash
# .env (Gateway)
ELEVENLABS_API_KEY=your-api-key
ELEVENLABS_AGENT_ID=default-agent-id
```

The agent ID can be overridden per session via the `meta.agentId` field when creating a session through the Control API.

## Audio Flow

```
Customer speech → Vonage → Gateway → ElevenLabs (STT)
                                         ↓
                                    AI processes
                                         ↓
Agent speech ← Vonage ← Gateway ← ElevenLabs (TTS)
```

Audio is streamed as raw PCM (L16, 16kHz) over WebSocket.
