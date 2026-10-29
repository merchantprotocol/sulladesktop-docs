---
sidebar_position: 1
sidebar_label: Authentication
---

# Authentication API

GhostAgent uses JWT-based authentication with a dual token system (access + refresh tokens).

## Auth Endpoints

### Register

```
POST /api/auth/register
```

Create a new user account.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "first_name": "John",
  "last_name": "Doe"
}
```

### Login

```
POST /api/auth/login
```

Authenticate and receive JWT tokens.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**

```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "is_active": true,
    "is_superuser": false
  },
  "token": {
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "socket_url": "ws://localhost:40365/ws/1"
  }
}
```

The `socket_url` is used by the frontend to establish a WebSocket connection for real-time call monitoring.

### Refresh Token

```
POST /api/auth/refresh
```

Obtain a new access token using a valid refresh token.

**Request Body:**

```json
{
  "refresh_token": "eyJ..."
}
```

### Get Current User

```
GET /api/auth/me
Authorization: Bearer <access_token>
```

### Change Password

```
PUT /api/auth/change-password
Authorization: Bearer <access_token>
```

**Request Body:**

```json
{
  "current_password": "oldPassword",
  "new_password": "newPassword123"
}
```

All existing tokens are revoked on password change.

### Logout

```
POST /api/auth/logout
Authorization: Bearer <access_token>
```

## Token Details

| Property               | Value                                        |
| ---------------------- | -------------------------------------------- |
| Algorithm              | HS256                                        |
| Access Token Lifetime  | 60 minutes (configurable)                    |
| Refresh Token Lifetime | 7 days (configurable)                        |
| Password Hashing       | argon2 via pwdlib                            |
| Token Storage          | `user_tokens` table with revocation tracking |

## Authorization (RBAC)

GhostAgent uses a hierarchical permission system:

1. **Superuser bypass** — superusers skip all permission checks
2. **Wildcard `*`** — grants all permissions
3. **Resource wildcard `resource.*`** — grants all actions on a resource (e.g., `user.*`)
4. **Exact match** — `user.create`, `role.list`, etc.

Permissions are assigned to **roles**, and roles are assigned to **users** (many-to-many).

### Permission Format

```
resource.action
```

Examples: `user.create`, `user.list`, `user.update`, `user.delete`, `role.list`, `permission.list`
