---
slug: /overview
sidebar_position: 1
sidebar_label: Overview
---

# GhostAgent Documentation

Welcome to the official documentation for **GhostAgent** by DataRipple — an AI-powered call center agent platform that provides real-time call monitoring, AI-assisted customer service, and compliance management.

## What GhostAgent Does

GhostAgent sits between your telephony provider and your customer service representatives, providing:

- **Real-time Call Monitoring** — Live transcripts, agent thinking visualization, and tool call tracking as calls happen
- **AI-Powered Agent** — An ElevenLabs conversational AI agent that handles calls, looks up accounts, processes refunds, and more via MCP tool calls
- **Compliance Engine** — Upload policy documents, extract rules via OCR, and automatically evaluate conversations for compliance
- **A/B Testing** — Compare different agent configurations and policies to optimize performance
- **Feedback Loop** — CSRs review AI tool calls, escalate issues, and provide feedback that improves the system
- **Role-Based Access Control** — Granular permissions with roles, wildcard support, and superuser bypass

## Platform Architecture

GhostAgent consists of four main components:

| Component     | Stack         | Purpose                                                                     |
| ------------- | ------------- | --------------------------------------------------------------------------- |
| **Launchpad** | Laravel (PHP) | Web app, admin panel, auth, CRUD, compliance, policies                      |
| **Gateway**   | Node.js       | WebSocket orchestration, ElevenLabs/Vonage connections, real-time broadcast |
| **Frontend**  | React 19      | CSR dashboard, admin UI, real-time call monitoring                          |
| **Database**  | PostgreSQL 16 | Users, roles, permissions, tokens, call data                                |

```
Phone Call → Vonage (telephony)
               ├─→ Audio WebSocket → ElevenLabs AI Agent
               │                       ├─→ Transcripts
               │                       ├─→ Agent Thinking
               │                       └─→ MCP Tool Calls → Gateway → Laravel
               ↓
          Vonage Webhooks → Gateway (Node.js)
                               ├─→ Call lifecycle events
                               └─→ WebSocket broadcast → Frontend (React)
```

## Quick Links

- [Getting Started](./getting-started.md) — Set up your development environment
- [Architecture](./architecture/overview.md) — System design and data flow
- [Backend API](./api/authentication.md) — API endpoint reference
- [Frontend](./frontend/pages.md) — UI pages and components
- [Integrations](./integrations/elevenlabs.md) — ElevenLabs, Vonage, and more
