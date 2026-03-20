---
sidebar_position: 2
sidebar_label: Git Branches
---

# Git Branches

Both the backend and frontend repositories have feature branches with significant work that hasn't been merged to main.

## Backend Branches (25 total)

### Core

| Branch     | Description                            |
| ---------- | -------------------------------------- |
| `main`     | Production-ready stable branch         |
| `jonathon` | Active development branch              |
| `dev`      | Primary development integration branch |

### Feature Branches

| Branch                                 | Feature                                   |
| -------------------------------------- | ----------------------------------------- |
| `feature/ringcentral-integration`      | RingCentral telephony integration         |
| `feature/talkdesk-integration`         | Talkdesk contact center integration       |
| `dev-dibyendu-RBAC`                    | Role-Based Access Control implementation  |
| `dev-dibyendu-sendgrid-email-service`  | SendGrid email service                    |
| `dev-dibyendu-agentSimulations`        | Agent simulation and testing              |
| `dev-dibyendu-conversation-evaluation` | Conversation evaluation system            |
| `dev-dibyendu-conversation-feedback`   | Conversation feedback features            |
| `dev-naveen-vonage`                    | Vonage VoIP integration with Celery tasks |
| `dev-serhiy-vonage`                    | Alternative Vonage implementation         |
| `vishal-claude`                        | Claude/audio WebSocket enhancements       |

### Developer Branches

| Branch                      | Developer                       |
| --------------------------- | ------------------------------- |
| `dev-bharath`               | Bharath                         |
| `dev-dibyendu`              | Dibyendu (main)                 |
| `dev-dibyendu-initialsetup` | Dibyendu (onboarding)           |
| `dev-dibyendu-merge`        | Dibyendu (merge integration)    |
| `dev-dibyendu-vishal`       | Dibyendu & Vishal collaboration |
| `dev-naveen`                | Naveen                          |
| `dev-naveen-test`           | Naveen (testing)                |
| `rajat-dev`                 | Rajat                           |

### Environment Branches

| Branch                          | Environment     |
| ------------------------------- | --------------- |
| `dev.ghostagent.com`            | Dev environment |
| `ghostagent-dev.dataripple.ai`  | DataRipple dev  |
| `ghostagent-test`               | Testing         |
| `ghostagent-test.dataripple.ai` | DataRipple test |

## Frontend Branches

| Branch                            | Description                |
| --------------------------------- | -------------------------- |
| `main`                            | Production-ready           |
| `jonathon`                        | Active development         |
| `dev`                             | Development integration    |
| `feature/ringcentral-integration` | RingCentral UI integration |
| `feature/talkdesk-integration`    | Talkdesk UI integration    |

## Key Branch Features to Merge

The following branches contain significant features that should be evaluated for merging into the main codebase:

1. **`dev-naveen-vonage`** — Contains the core telephony integration (Vonage webhooks, audio streaming, ElevenLabs agent client, event broadcasting). This is the foundation of the live call system.

2. **`dev-dibyendu-RBAC`** — Full RBAC implementation that is now in the main branch.

3. **`feature/ringcentral-integration`** and **`feature/talkdesk-integration`** — Alternative IVR provider support.

4. **`dev-dibyendu-sendgrid-email-service`** — Email notifications for the platform.
