# Welcome to my task!

### Technologies used:

#### Backend and DB
- Node.js (Latest LTS)
- Express.js
- Graphql
- Postgres
- Sequelize
- Jest
- TS

#### Frontend
- React
- Next.js
- Apollo
- Jest
- TS

## Backend Installation

### Data Base

1. For this project, you need to install postgres. You can install postgres from this [site](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads), highly recommend to use pgAdmin.
2. In order to establish a connection thru Sequelize we need to create a database, which we'll need to add into some environment variables.
3. Once you've cloned the repository, create an `.env` file in the root of the `task-v1-be` project. These are the variables you need to create:
```javascript
DB_HOST=localhost
DB_USER=your_db_user
DB_NAME=your_db_name
DB_PORT=your_db_port
DB_PASS=your_db_password
```

### Install and run backend project

Now you should be ready to install dependencies. Use the package manager [npm](https://docs.npmjs.com/).

Run this command at root folder to install dependencies:

```bash
# for monorepo dependencies
npm install

# for backend dependencies
npm install i-backend
```

Before you run the project you need to add two more environment variables into `.env` in `task-v1-be` project:

```javascript
APP_PORT=4000
APP_HOST=127.0.0.1
```

To run the project you need to run this command:

```bash
# from monorepo(root) folder
npm run backend

# from backend folder
npm start
```

### Testing
To run the unit tests you need to run this command:

```bash
# from backend folder
npm test
```

### Seeds
I added a simple command to run some seeds in order to have a couple of comments at the beginning of installation. This is just a helper. To run the seed you need to run this command:

```bash
# from backend folder
npm run seeds
```

## Notes

Idea of comments is to have a kind of tree data structure, so one comment node can have multiple comments and these comments can have more. The max level of the tree should be 4 knowing that the post(head) is 0.


## Frontend Installation


Use the package manager [npm](https://docs.npmjs.com/).

Run this command at root folder to install dependencies:

```bash
# for monorepo dependencies
npm install

# for frontend dependencies
npm install i-frontend
```

To run the project you need to run this command:
```bash
# from monorepo(root) folder
npm run frontend

# from frontend folder (task-v1-fe)
npm run dev
```

### Testing
To run the unit tests you need to run this command:

```bash
# from frontend folder
npm test
```
