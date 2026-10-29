---
sidebar_position: 2
sidebar_label: Scaling
---

# Scaling Strategy

GhostAgent is designed to scale from a single developer machine to a multi-node production deployment.

## Gateway Scaling

The Gateway is the critical scaling point — it manages all persistent WebSocket connections.

### Single Node (up to ~500 concurrent calls)

A single Node.js instance comfortably handles:

- ~500 ElevenLabs WebSocket connections
- ~500 Vonage audio streams
- ~500 CSR WebSocket connections
- **~1,500 total concurrent WebSockets**

Node.js uses ~50KB per WebSocket connection, so 1,500 connections ≈ 75MB of memory.

### Multi-Node (500+ concurrent calls)

```
                    Load Balancer
                    (sticky sessions by callId)
                         │
              ┌──────────┼──────────┐
              │          │          │
           Node 1     Node 2     Node 3
           (gateway)  (gateway)  (gateway)
              │          │          │
              └──────────┼──────────┘
                         │
                      Redis
                    (pub/sub)
```

**How it works:**

1. **Sticky sessions** — The load balancer routes WebSocket upgrades by `callId` or `userId` so all connections for a single call land on the same node
2. **Redis pub/sub** — Events published on any node are received by all nodes, allowing cross-node broadcasts
3. **Stateless REST** — The Control API can hit any node since session state is local (the load balancer routes by session)

**Configuration:**

```bash
# .env
REDIS_URL=redis://redis-host:6379
```

Redis is optional — the gateway works without it for single-node deployments.

### Scaling Limits

| Metric           | Single Node     | With Redis (3 nodes) |
| ---------------- | --------------- | -------------------- |
| Concurrent calls | ~500            | ~1,500               |
| CSR connections  | ~500            | ~1,500               |
| Memory usage     | ~100MB          | ~100MB per node      |
| CPU usage        | Low (I/O bound) | Low per node         |

The bottleneck is typically the ElevenLabs API rate limits, not the gateway itself.

## Laravel Scaling

Standard horizontal scaling behind a load balancer:

- Stateless PHP-FPM workers
- Session stored in Redis/database
- Queue workers (Horizon) for background jobs
- Read replicas for database scaling

## Database Scaling

PostgreSQL 16 with:

- Connection pooling (PgBouncer)
- Read replicas for read-heavy queries (conversation logs, compliance reports)
- Partitioning for high-volume tables (call logs, activity logs)

## Docker Compose (Production)

```yaml
services:
  gateway:
    image: ghostagent-gateway:latest
    deploy:
      replicas: 3
    env_file: .env
    depends_on:
      - redis

  redis:
    image: redis:7-alpine
    volumes:
      - redis-data:/data

  launchpad:
    image: ghostagent-launchpad:latest
    deploy:
      replicas: 2

  frontend:
    image: ghostagent-frontend:latest

  db:
    image: postgres:16-alpine
    volumes:
      - pg-data:/var/lib/postgresql/data
```
