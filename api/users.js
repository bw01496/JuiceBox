const express = require("express");
const usersRouter = express.Router();
const { getAllUsers } = require("../db");

// UPDATE
usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

usersRouter.get("/", (req, res) => {
  res.send({
    users: [],
  });
});

module.exports = usersRouter;
