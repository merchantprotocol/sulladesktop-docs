---
sidebar_position: 1
sidebar_label: Database Schema
---

# Database Schema

GhostAgent uses PostgreSQL 16 with the `ghostagent` schema.

## Tables

### users

Primary user accounts table.

| Column        | Type             | Notes                          |
| ------------- | ---------------- | ------------------------------ |
| id            | serial PK        |                                |
| email         | varchar (unique) | Login identifier               |
| first_name    | varchar          |                                |
| last_name     | varchar          |                                |
| password      | varchar          | argon2 hash                    |
| is_active     | boolean          | Soft-delete flag               |
| is_superuser  | boolean          | Bypasses all permission checks |
| profile_photo | varchar          | URL/path                       |
| created_at    | timestamp        |                                |
| updated_at    | timestamp        |                                |
| last_login    | timestamp        |                                |

### user_tokens

JWT token storage with revocation tracking.

| Column              | Type             | Notes                    |
| ------------------- | ---------------- | ------------------------ |
| id                  | serial PK        |                          |
| user_id             | FK → users       | CASCADE delete           |
| refresh_token       | varchar (unique) |                          |
| access_token        | varchar (unique) |                          |
| access_token_expiry | timestamp        |                          |
| is_revoked          | boolean          | Checked on every request |
| created_at          | timestamp        |                          |
| updated_at          | timestamp        |                          |

### roles

Role definitions for RBAC.

| Column      | Type             | Notes                              |
| ----------- | ---------------- | ---------------------------------- |
| id          | serial PK        |                                    |
| name        | varchar (unique) | e.g., "admin", "supervisor", "csr" |
| description | varchar          |                                    |
| created_at  | timestamp        |                                    |
| updated_at  | timestamp        |                                    |

### permissions

Granular permission definitions.

| Column      | Type             | Notes                            |
| ----------- | ---------------- | -------------------------------- |
| id          | serial PK        |                                  |
| code        | varchar (unique) | e.g., "user.create", "role.list" |
| name        | varchar          | Human-readable label             |
| description | varchar          |                                  |
| created_at  | timestamp        |                                  |

### user_roles (junction)

Many-to-many: users ↔ roles.

| Column  | Type       | Notes          |
| ------- | ---------- | -------------- |
| user_id | FK → users | CASCADE delete |
| role_id | FK → roles | CASCADE delete |

### role_permissions (junction)

Many-to-many: roles ↔ permissions.

| Column        | Type             | Notes          |
| ------------- | ---------------- | -------------- |
| role_id       | FK → roles       | CASCADE delete |
| permission_id | FK → permissions | CASCADE delete |

## Entity Relationship Diagram

```
users ──┬── user_tokens
        │
        └── user_roles ── roles ── role_permissions ── permissions
```

## Migrations

Migrations are managed by Alembic (Python backend) and Laravel migrations (Launchpad).

### Alembic Migration History

1. **88d33892ffa9** — Initial (no-op, superseded)
2. **37abcd61920c** — Creates all tables: users, user_tokens, roles, permissions, user_roles, role_permissions

### Running Migrations

```bash
# Alembic (Python backend)
docker compose exec backend uv run alembic upgrade head

# Laravel (Launchpad)
php artisan migrate
```

### Seeding

```bash
# Python backend — creates admin user
docker compose exec backend uv run python seed.py
```

Default seed user: `admin@ghostagent.com` / `admin123`
