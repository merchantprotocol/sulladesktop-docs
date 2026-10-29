---
sidebar_position: 3
sidebar_label: Features
---

# Frontend Features

## Compliance Management

### Policy Sets

- Create and manage policy sets (collections of compliance rules)
- Upload PDF/document policy files
- OCR-based automatic rule extraction from uploaded documents
- Manual rule creation and editing
- Rule versioning — finalize a policy set to create a version snapshot
- Activate/deactivate policy versions

### Compliance Evaluation

- Run AI-driven compliance checks against conversations
- View detailed compliance reports per conversation
- Compliance log viewer with filtering

### Compliance Wizard

A 6-step guided onboarding wizard for setting up compliance rules from scratch.

## Call Recording Management

- Batch upload audio recording files
- Audio playback with secure SAS URL generation
- Recording metadata display (date, duration, CSR, etc.)
- Extract and process tool calls from recordings
- Batch process multiple recordings simultaneously

## Feedback System

- **Feedback Queue** — Pending feedback items from CSRs reviewing tool calls
- **Filters** — By CSR, tool name, status, date range
- **AI Assessment** — Generate an AI-powered assessment of feedback items
- **Escalation** — Escalate feedback to DataRipple for review
- **Archive** — Mark feedback as non-issue

## User Management

- View all users with search and filtering
- Create new users with role assignment
- Edit user details (name, email, active status)
- Delete individual or bulk delete multiple users
- Bulk activate/deactivate users
- Invite new users to the platform

## Role & Permission Management

- View, create, edit, delete roles
- Assign permissions to roles
- View all available permissions in the system
- Role-based UI access control (AdminRoute wrapper)

## A/B Testing

- Create experiments to compare agent/policy configurations
- View real-time experiment metrics and performance
- Compare agents side-by-side
- Filter and search experiments

## Organization Settings

- **IVR Integrations** — Configure Vonage, RingCentral, or Talkdesk
- **API Keys** — Manage API key generation and access
- **General Settings** — Organization-level configuration

## Tech Stack

| Library               | Version    | Purpose                                         |
| --------------------- | ---------- | ----------------------------------------------- |
| React                 | 19.2       | UI framework                                    |
| Vite                  | 7.1        | Build tool                                      |
| Tailwind CSS          | 4.1        | Utility-first CSS                               |
| shadcn/ui             | —          | 43 headless UI components (Radix UI)            |
| TanStack React Table  | 8.21       | Data tables with sorting, filtering, pagination |
| TanStack React Query  | 5.90       | Server state management and caching             |
| Redux Toolkit         | 2.9        | Client state (session, sidebar)                 |
| React Hook Form + Zod | 7.65 / 4.1 | Form validation                                 |
| TipTap                | 3.11       | Rich text editor                                |
| Recharts              | 3.3        | Data visualization                              |
| Framer Motion         | 12.23      | Animations                                      |
| Sonner                | 2.0        | Toast notifications                             |
| Axios                 | 1.12       | HTTP client                                     |
| Lucide React          | 0.554      | Icons                                           |
