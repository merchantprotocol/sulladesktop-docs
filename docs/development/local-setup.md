---
sidebar_position: 1
sidebar_label: Local Development
---

# Local Development Setup

## Repository Map

All GhostAgent repos live under the `dataripple/` directory:

```
dataripple/
├── ghostagent/              # Original Laravel app container
├── ghostagent-backend/      # FastAPI Python backend (legacy)
├── ghostagent-frontend/     # React 19 frontend
├── ghostagent-gateway/      # Node.js WebSocket gateway
├── ghostagent-docs/         # Documentation site (Docusaurus)
└── launchpad/               # Laravel modular app (primary)
```

## Starting Services

### Option 1: Docker Compose (recommended)

Each component has its own `docker-compose.yml`:

```bash
# Gateway + Redis
cd ghostagent-gateway && docker compose up -d

# Frontend
cd ghostagent-frontend && docker compose up -d

# Backend (legacy)
cd ghostagent-backend && docker compose up -d
```

### Option 2: Local Development

```bash
# Gateway (Node.js)
cd ghostagent-gateway
npm install
cp .env.example .env
npm run dev          # Starts with --watch for hot reload

# Frontend (React)
cd ghostagent-frontend
npm install
npm run dev          # Vite dev server on port 3005

# Launchpad (Laravel)
cd launchpad
composer install
php artisan serve    # Port 80
```

## Port Reference

| Port     | Service               | Protocol         |
| -------- | --------------------- | ---------------- |
| 80 / 443 | Launchpad (Laravel)   | HTTP/HTTPS       |
| 3005     | Frontend (React dev)  | HTTP             |
| 8080     | Gateway               | HTTP + WebSocket |
| 40365    | Backend API (FastAPI) | HTTP             |
| 45432    | PostgreSQL            | TCP              |
| 6379     | Redis                 | TCP              |

## Environment Setup

1. Copy `.env.example` → `.env` in each project
2. For local development without external services, leave ElevenLabs and Vonage keys empty — the gateway will start without them
3. Redis is optional for single-node development — leave `REDIS_URL` empty

## Database Setup

```bash
# Using the Docker PostgreSQL from ghostagent-backend
cd ghostagent-backend
docker compose up -d db

# Run migrations
docker compose exec backend uv run alembic upgrade head

# Seed default admin user
docker compose exec backend uv run python seed.py
```

## Useful Commands

```bash
# Gateway
just health          # Check gateway status
just sessions        # List active call sessions
just stats           # Connection statistics

# Frontend
npm run dev          # Dev server with hot reload
npm run build        # Production build

# Docs
yarn website:start   # Dev server with hot reload
yarn website:build   # Production build
```
