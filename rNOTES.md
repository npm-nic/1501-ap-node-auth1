# Authentication Project

- Today's [training kit]()
- Today's [recorded lecture]()

---

## Lets Do This

- `npm init -y`
- `npm i bcryptjs connect-session-knex cors dotenv express express-session helmet morgan knex knex-cleaner sqlite3 -D nodemon`

  - took everything from guided lecture package.json
  - is this all necessary? we will find out

---

### Set up your Database

`knex init`

- creates [./knexfile.js](knexfile.js)

  ```javascript
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  ```

`knex migrate:make big-bang`

- creates : database :open_file_folder: >> migrations :open_file_folder: >> [timestamp_big-bang.js](database/migrations/20200817141404_big-bang.js)

  - build it out as needed
  - took code from the guided lecture today

`knex seed:make 000-cleanup`

- :open_file_folder: seeds
  - [000-cleanup.js](database/seeds/000-cleanup.js)

`knex seed:make 001-init`

- :open_file_folder: seeds

  - [001-init.js](database/seeds/001-init.js)

- :eyes: brush up on seeds :eyes:

`knex migrate:latest`

- check SQLite Studio for tables :white_check_mark:

---

### Set up the server

`touch index.js`

:open_file_folder: api

- [server.js](api/server.js)
- :open_file_folder: users
  - [users-router.js](api/users/users-router.js)
  - [users-model.js](api/users/users-model.js)

---

### Set up Authentication

:open_file_folder: api

- :open_file_folder: auth

  - [auth-router.js](api/auth/auth-router.js)
    - /register
    - /login
    - /logout

- :open_file_folder: middleware --> [protected.js](api/middleware/protected.js)

- :open_file_folder: config
  - not too sure how about naming conventions
  - just pulled it out of server.js from today's guided project
  - [session-config.js](api/config/session-config.js)
    - [express-sessions](https://www.npmjs.com/package/express-session)
    - [connect-session-knex](https://www.npmjs.com/package/connect-session-knex)

[server.js](api/server.js)

- bring it all together
  - add `api/auth` route
  - protect `/api/users` route
  - sessionConfiguration
