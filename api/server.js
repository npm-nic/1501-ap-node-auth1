const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");

const protected = require("./middleware/protected");
const sessionConfiguration = require("./config/session-config");

const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");

const app = express();
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(session(sessionConfiguration));

app.use("/api/users", protected, usersRouter);
app.use("/api/auth", authRouter);

app.get("/hello", (req, res) => {
  res.status(200).json({ hello: `server` });
});

module.exports = app;
