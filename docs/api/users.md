---
sidebar_position: 2
sidebar_label: Users
---

# Users API

Manage user accounts, roles, and permissions. All endpoints require authentication and appropriate permissions.

## Endpoints

### List Users

```
GET /api/users/?skip=0&limit=100
Authorization: Bearer <access_token>
Permission: user.list
```

### Create User

```
POST /api/users/
Authorization: Bearer <access_token>
Permission: user.create
```

**Request Body:**

```json
{
  "email": "newuser@example.com",
  "password": "securePassword",
  "first_name": "Jane",
  "last_name": "Smith",
  "is_active": true,
  "role_ids": [1, 2]
}
```

### Get User

```
GET /api/users/{user_id}
Authorization: Bearer <access_token>
Permission: user.list
```

### Update User

```
PUT /api/users/{user_id}
Authorization: Bearer <access_token>
Permission: user.update
```

### Delete User

```
DELETE /api/users/{user_id}
Authorization: Bearer <access_token>
Permission: user.delete
```

### Assign Roles

```
POST /api/users/{user_id}/assign-roles
Authorization: Bearer <access_token>
Permission: user.update
```

**Request Body:**

```json
{
  "role_ids": [1, 3]
}
```

### Get User Permissions

```
GET /api/users/{user_id}/permissions
Authorization: Bearer <access_token>
Permission: user.list
```

Returns all effective permissions for a user (aggregated from all assigned roles).

### Bulk Update Status

```
POST /api/users/bulk-update
Authorization: Bearer <access_token>
Permission: user.update
```

**Request Body:**

```json
{
  "user_ids": [1, 2, 3],
  "is_active": false
}
```

### Bulk Delete

```
POST /api/users/bulk-delete
Authorization: Bearer <access_token>
Permission: user.delete
```

**Request Body:**

```json
{
  "user_ids": [4, 5, 6]
}
```

## Roles API

### List Roles

```
GET /api/roles/
Permission: role.list
```

### Create Role

```
POST /api/roles/
Permission: role.create
```

**Request Body:**

```json
{
  "name": "supervisor",
  "description": "Can view all calls and manage CSRs",
  "permissions": ["user.list", "user.update", "role.list"]
}
```

### Update Role

```
PUT /api/roles/{role_id}
Permission: role.update
```

### Delete Role

```
DELETE /api/roles/{role_id}
Permission: role.delete
```

## Permissions API

### List Permissions

```
GET /api/permissions/
Permission: permission.list
```

### Create Permission

```
POST /api/permissions/
Permission: permission.create
```

**Request Body:**

```json
{
  "code": "compliance.evaluate",
  "name": "Evaluate Compliance",
  "description": "Can run compliance evaluations on conversations"
}
```
