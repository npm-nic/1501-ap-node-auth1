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
