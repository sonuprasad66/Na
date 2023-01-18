const express = require("express");
const userRouter = express.Router();
const { userSignup, userLogin } = require("../Controllers/User.controller");

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);

module.exports = {
  userRouter,
};
