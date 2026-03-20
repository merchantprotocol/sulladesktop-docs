---
sidebar_position: 3
sidebar_label: Other Integrations
---

# Other Integrations

## RingCentral

**Status:** Feature branch (`feature/ringcentral-integration`)

RingCentral integration provides an alternative to Vonage for telephony. Configuration is available in the Organization Settings page under IVR Integrations.

## Talkdesk

**Status:** Feature branch (`feature/talkdesk-integration`)

Talkdesk contact center integration, also configurable via Organization Settings.

## SendGrid

**Status:** Feature branch (`dev-dibyendu-sendgrid-email-service`)

Email service integration for sending notifications, password resets, and user invitations.

## Supabase

The backend connects to a Supabase-hosted PostgreSQL database for order and payment data used by the refund action system. This is a secondary database connection separate from the primary GhostAgent database.

```bash
# .env (Backend)
SUPABASE_URL=postgresql://user:pass@host:5432/db
```

## Redis

Used by the Gateway for multi-node scaling via pub/sub. Optional for single-node deployments.

```bash
# .env (Gateway)
REDIS_URL=redis://localhost:6379
```

## Git Branch Feature Map

| Branch                                 | Integration                         |
| -------------------------------------- | ----------------------------------- |
| `feature/ringcentral-integration`      | RingCentral telephony               |
| `feature/talkdesk-integration`         | Talkdesk contact center             |
| `dev-naveen-vonage`                    | Vonage VoIP + Celery tasks          |
| `dev-dibyendu-sendgrid-email-service`  | SendGrid email                      |
| `dev-dibyendu-agentSimulations`        | Agent simulation/testing            |
| `dev-dibyendu-conversation-evaluation` | Conversation analysis               |
| `dev-dibyendu-conversation-feedback`   | Feedback features                   |
| `dev-dibyendu-RBAC`                    | Role-Based Access Control           |
| `vishal-claude`                        | Claude/audio WebSocket enhancements |
