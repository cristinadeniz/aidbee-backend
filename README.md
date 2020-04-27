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
| createdAt | Number |          |              |

### HELP MODEL
 
| KEY                 |  TYPE                                 | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------------------| --------------------------------------| --------- | -------- | ---------------
| type                | Stringn enum: [Health, Food, Other]   | -         | true     | -
| userAskingForHelp   | ObjectId                              | Users     | true     | current_user
| helper              | ObjectId                              | Users     | true     | current_user
| address             | String                                | -         | yes      |
| requestTitle        | String                                | -         | yes      |
| additionalInfo      | String                                | -         |          | 
| createdAt           | Number                                |           |          |


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

### HELP ENDPOINTS
> TOKEN Required: YES

METHOD | URL                     | What does it do                 |
-------|-------------------------|---------------------------------|
GET    | `/:helpId`              | Get Help By Id                  |
GET    | `me/helps`              | Get All My Helps Requests       |
GET    | `me/userID/helpID`      | Get All My Accepted Helps       |
POST   | `me/`                   | Create Help                     |
DELETE | `me/:helpId`            | Delete Help By Id               |
PUT    | `me/:helpId`            | Update Help By Id               |
PUT    | `me/:helpId/acceptHelp` | Update Help By Id               |
PUT    | `me/:helpId/refuseHelp` | Update Help By Id               |

### FILTERS
Filter by type of Help (Health, Food, Others)
