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

### HELP MODEL

| KEY             | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------------  | -------- | --------- | -------- | ---------------
| type            | String   | -         | true     | -
| user            | ObjectId | Users     | true     | current_user
| address         | String   | -         | yes      |
| helpRequest     | String   | -         | yes      |
| additionalInfo  | String   | -         |          | 


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
| GET    | `me/:userID`              | Get One User By Id       |
| POST   | `me/:userID`              | Create One User          |
| PUT    | `me/:userID`              | Update User By Id        |
| DELETE | `me/:userID`              | Delete User By Id        |

### HELP ENDPOINTS
> TOKEN Required: YES

METHOD | URL                     | What does it do                 |
-------|-------------------------|---------------------------------|
GET    | `/:helpId`              | Get Help By Id                  |
GET    | `/helps`                | Get All Helps or by query       |
GET    | `me/userID/helpID`      | Get One Help By User            |
GET    | `me/userID/helps`       | Get All Helps By User           |
POST   | `/`                     | Create Help                     |
DELETE | `me/:helpId`            | Delete Help By Id               |
PUT    | `me/:helpId`            | Update Help By Id               |

### FILTERS
Filter by type of Help (Health, Food, Others)
