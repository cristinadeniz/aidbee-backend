# Aidbee

## Introduction

- Add a project description

## MODELS

### USER MODEL

| KEY       | TYPE   | REQUIRED | VALIDATIONS  |
| --------- | ------ | ---------|------------- |
| name      | String | true     |              |
| surname   | String | true     |              |
| email     | String | true     | regex(email  |
| password  | String | true     | min(6)       |
| telephone | String | true     |              |
| image_url | String |          |              |
| created_at |Number|          |              |

### HELP MODEL

| KEY                 |  TYPE      | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------------------| -----------| --------- | -------- | ---------------
| request_title       | String     | -         | yes
| address             | String     | -         | yes
| help_type           | String     | -         | true     | enum: [`health`, `food`, `other`]
| additional_info     | String     | -         |          |
| is_done             | Boolean    | -         |          | false
| created_at          | Date       |           |
| requester           | ObjectId   | Users     | true     | current_user
| helper              | ObjectId   | Users     |          |

### REQUEST MODEL

| KEY                 |  TYPE      | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------------------| -----------| --------- | -------- | ---------------
| message             | String     | -         | yes
| status              | String     | -         |          | enum: [`requested`, `accepted`, `done`, `rejected`]
| help                | ObjectId   | Help      | true
| user                | ObjectId   | Users     | true     | current_user

## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL           | What does it do      |
| ------ | ------------- | -------------------- |
| POST   | `auth/signup` | Create a new account |
| POST   | `auth/login`  | Authenticates a user |

### USERS ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                       | What does it do          |
| ------ | ------------------------- | ------------------------ |
| GET    | `/me`                     | Get My Profile           |
| PUT    | `/me`                     | Update My Profile        |
| DELETE | `/me`                     | Delete My Profile        |

### HELPS ENDPOINTS (Requester side)
> TOKEN Required: YES

METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------
GET    | `me/helps`              | Get All My Helps
POST   | `me/helps`              | Create My Help
GET    | `me/helps/:id`          | Get My Help By Id
PUT    | `me/helps/:id`          | Update My Help By Id
DELETE | `me/helps/:id`          | Delete My Help By Id

### REQUESTS ENDPOINT (Requester side)
> TOKEN Required: YES

METHOD | URL                                   | What does it do
-------|---------------------------------------|---------------------------------
GET    | `me/helps/requests/:helpId`           | See all Help Requests for a Help
PUT    | `me/helps/requests/:requestId/accept` | Accept A Help Requests (now you can help me)
PUT    | `me/helps/requests/:requestId/refuse` | Refuse Help Requests (no thanks)
PUT    | `me/helps/requests/:requestId/done`   | Mark A Help Requests as Completed (thanks)


### REQUESTS ENDPOINT (Helper side)
> TOKEN Required: YES

METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------
GET    | `/me/requests`          | Get all my Help Requests
POST   | `/me/request/`          | Create Help Requests (request to help)
DELETE | `/me/request/:id`       | Remove Help Requests (stop requesting to help)