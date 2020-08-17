const usersRouter = require("express").Router();

const Users = require("./users-model");

usersRouter.get("/hello", (req, res) => {
  res.status(200).json({ hello: `users` });
});

usersRouter.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      users.length
        ? res.status(200).json(users)
        : res.status(200).json({ users: "none that we know of" });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ error: `its not you, its me` });
    });
});

usersRouter.get("/:id", (req, res) => {
  const req_id = req.params.id;
  Users.findById(req_id)
    .then((user) => {
      user
        ? res.status(200).json(user)
        : res.status(200).json({ user: "does not exists" });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ error: `its not you, its me` });
    });
});

module.exports = usersRouter;
