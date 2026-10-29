---
sidebar_position: 1
sidebar_label: Pages & Routes
---

# Frontend Pages & Routes

GhostAgent's frontend is built with React 19, Vite, Tailwind CSS, and shadcn/ui components.

## Public Routes

| Route              | Page            | Description                   |
| ------------------ | --------------- | ----------------------------- |
| `/login`           | Login           | Email/password authentication |
| `/forgot-password` | Forgot Password | Password recovery flow        |
| `/reset-password`  | Reset Password  | Password reset confirmation   |

## CSR Routes (Authenticated)

| Route            | Page          | Description                                                                                                       |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/dashboard`     | Dashboard     | Real-time call monitoring with live transcript, agent thinking, tool calls, sentiment analysis, and call controls |
| `/conversations` | Conversations | Browse and search all conversation logs with detailed transcript viewer                                           |
| `/users`         | Users         | User management (admin role required)                                                                             |
| `/profile`       | Profile       | Edit current user's profile                                                                                       |

## Admin Routes (Role-Based)

| Route                          | Page                  | Description                                                           |
| ------------------------------ | --------------------- | --------------------------------------------------------------------- |
| `/admin/dashboard`             | Admin Dashboard       | Analytics and insights                                                |
| `/admin/users`                 | User Management       | Full CRUD with bulk operations (activate/deactivate, delete)          |
| `/admin/compliances`           | Compliance Logs       | View compliance evaluation results                                    |
| `/admin/policies`              | Policy Management     | Create policy sets, upload documents, manage rules                    |
| `/admin/policies/:id`          | Policy Rules          | Edit rules within a policy set, versioning, activation                |
| `/admin/policy-ocr-prompt`     | OCR Prompt Config     | Configure the prompt used for policy document extraction              |
| `/admin/role-permission`       | Roles & Permissions   | Create roles, assign permissions, manage RBAC                         |
| `/admin/organization-settings` | Organization Settings | IVR integrations (Vonage, RingCentral, Talkdesk), API keys            |
| `/admin/compliance-wizard`     | Compliance Wizard     | 6-step guided onboarding for compliance rules                         |
| `/admin/call-records`          | Call Records          | Upload recordings, audio playback, batch tool call processing         |
| `/admin/feedback`              | Feedback Queue        | Review CSR feedback on tool calls, escalate, archive, AI assessment   |
| `/admin/ab-testing`            | A/B Testing           | Create experiments, compare agent/policy configurations, view metrics |
| `/admin/agent-view`            | Agent View            | Agent-specific monitoring dashboard                                   |
