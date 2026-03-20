---
sidebar_position: 2
sidebar_label: Getting Started
---

# Getting Started

This guide walks you through setting up a local GhostAgent development environment.

## Prerequisites

- Docker and Docker Compose
- Node.js 20+
- PHP 8.2+ with Composer (for Launchpad)
- PostgreSQL 16 (or use the Docker container)

## Repository Structure

```
dataripple/
├── ghostagent/              # Original Laravel app (legacy)
├── ghostagent-backend/      # FastAPI backend (being migrated to Launchpad)
├── ghostagent-frontend/     # React 19 frontend
├── ghostagent-gateway/      # Node.js WebSocket gateway
├── ghostagent-docs/         # This documentation site (Docusaurus)
└── launchpad/               # Laravel modular app (primary backend)
```

## Quick Start

### 1. Gateway (WebSocket Server)

```bash
cd ghostagent-gateway
cp .env.example .env
just up          # Starts gateway + Redis via Docker Compose
just health      # Verify: http://localhost:8080/health
```

### 2. Frontend

```bash
cd ghostagent-frontend
cp .env.example .env
docker compose up -d
# Access at http://localhost:3005
```

### 3. Backend (FastAPI — Legacy)

```bash
cd ghostagent-backend
docker compose up -d
docker compose exec backend uv run alembic upgrade head
docker compose exec backend uv run python seed.py
# API docs at http://localhost:40365/docs
```

**Default credentials:** `admin@ghostagent.com` / `admin123`

### 4. Documentation Site

```bash
cd ghostagent-docs
yarn install
yarn website:start
# Access at http://localhost:3000
```

## Environment Variables

Each component has its own `.env.example` file. Key variables:

| Variable              | Component | Purpose                       |
| --------------------- | --------- | ----------------------------- |
| `ELEVENLABS_API_KEY`  | Gateway   | ElevenLabs conversational AI  |
| `ELEVENLABS_AGENT_ID` | Gateway   | Default AI agent ID           |
| `VONAGE_API_KEY`      | Gateway   | Vonage telephony              |
| `API_SECRET`          | Gateway   | Laravel ↔ Gateway auth        |
| `REDIS_URL`           | Gateway   | Multi-node scaling (optional) |
| `VITE_API_URL`        | Frontend  | Backend API base URL          |
| `DATABASE_URL`        | Backend   | PostgreSQL connection         |

## Ports Reference

| Port  | Service                   |
| ----- | ------------------------- |
| 3005  | Frontend (React)          |
| 8080  | Gateway (WebSocket + API) |
| 40365 | Backend API (FastAPI)     |
| 45432 | PostgreSQL                |
| 6379  | Redis                     |
