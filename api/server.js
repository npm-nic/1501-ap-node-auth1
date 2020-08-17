const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./users/users-router");

const app = express();
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/users", usersRouter);

app.get("/hello", (req, res) => {
  res.status(200).json({ hello: `world` });
});

module.exports = app;
