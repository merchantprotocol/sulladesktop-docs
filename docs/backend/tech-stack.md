---
sidebar_position: 2
sidebar_label: Tech Stack
---

# Tech Stack

## Backend (Legacy — FastAPI)

The original backend, currently being migrated to the Laravel Launchpad.

| Technology | Version | Purpose                             |
| ---------- | ------- | ----------------------------------- |
| Python     | 3.12    | Runtime                             |
| FastAPI    | 0.118+  | Web framework                       |
| SQLAlchemy | 2.0+    | ORM (async)                         |
| asyncpg    | —       | Async PostgreSQL driver             |
| psycopg2   | —       | Sync PostgreSQL driver (migrations) |
| Alembic    | —       | Database migrations                 |
| Uvicorn    | —       | ASGI server                         |
| Pydantic   | —       | Request/response validation         |
| PyJWT      | —       | JWT token handling                  |
| pwdlib     | —       | Password hashing (argon2)           |
| uv         | —       | Package manager                     |

## Backend (Current — Laravel Launchpad)

| Technology              | Purpose                      |
| ----------------------- | ---------------------------- |
| PHP 8.2                 | Runtime                      |
| Laravel 11              | Web framework                |
| nwidart/laravel-modules | Modular architecture         |
| Laravel Reverb          | WebSocket server (dashboard) |
| PostgreSQL 16           | Primary database             |

### Laravel Modules

| Module             | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| Tokens             | API token management (team & admin)            |
| Mcp                | MCP server, tool registry, request logging     |
| Compliance         | Policy management, rule extraction, evaluation |
| Feedback           | CSR feedback queue and assessment              |
| Recordings         | Call recording upload and processing           |
| Integrations       | IVR provider configuration                     |
| LiveCallMonitoring | Real-time call dashboard                       |
| Organizations      | Team management                                |
| Admin              | Admin panel                                    |

## Gateway (Node.js)

| Technology | Version | Purpose                   |
| ---------- | ------- | ------------------------- |
| Node.js    | 20+     | Runtime                   |
| Express    | 4.21    | HTTP server               |
| ws         | 8.18    | WebSocket server & client |
| ioredis    | 5.4     | Redis pub/sub for scaling |
| pino       | 9.4     | Structured logging        |
| uuid       | 10.0    | Session ID generation     |

## Frontend (React)

| Technology            | Version | Purpose                           |
| --------------------- | ------- | --------------------------------- |
| React                 | 19.2    | UI framework                      |
| Vite                  | 7.1     | Build tool                        |
| Tailwind CSS          | 4.1     | Styling                           |
| shadcn/ui (Radix)     | —       | Component library (43 components) |
| Redux Toolkit         | 2.9     | Client state                      |
| TanStack React Query  | 5.90    | Server state & caching            |
| TanStack React Table  | 8.21    | Data tables                       |
| React Hook Form + Zod | —       | Form validation                   |
| React Router DOM      | 7.9     | Routing                           |
| Axios                 | 1.12    | HTTP client                       |
| TipTap                | 3.11    | Rich text editor                  |
| Recharts              | 3.3     | Charts                            |

## Infrastructure

| Technology              | Purpose                    |
| ----------------------- | -------------------------- |
| Docker & Docker Compose | Container orchestration    |
| PostgreSQL 16           | Primary database           |
| Redis 7                 | Pub/sub, caching, sessions |
| Nginx                   | Reverse proxy              |
| Just                    | Task runner                |
