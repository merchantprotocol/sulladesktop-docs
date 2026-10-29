# GhostAgent Documentation Style Guide

## Audience

GhostAgent documentation is written for developers who will integrate with or extend the platform. Assume familiarity with web development, REST APIs, and WebSockets, but not with the specific GhostAgent architecture.

## Principles

- **Lead with what, then why** — Start each page with what the thing does, then explain why it exists.
- **Show the code** — Include request/response examples for every API endpoint.
- **Real examples** — Use realistic data (actual field names, plausible values), not `foo`/`bar`.
- **Keep it current** — If code changes, docs change. Stale docs are worse than no docs.

## Structure

- Each doc page starts with YAML frontmatter (`sidebar_position`, `sidebar_label`).
- Use ATX-style headers (`#`, `##`, `###`).
- Use tables for structured data (endpoints, fields, configurations).
- Use fenced code blocks with language identifiers (`json`, `bash`, `yaml`, `javascript`).
- Use ASCII diagrams for architecture flows — no external image dependencies.

## Formatting

- File paths: backtick code spans (`` `src/index.js` ``)
- Environment variables: backtick code spans (`` `ELEVENLABS_API_KEY` ``)
- API endpoints: code blocks with HTTP method prefix (`GET /api/sessions`)
- Component names: backtick code spans (`` `ConnectionManager` ``)
