const express = require("express");
const router = express.Router();
const authHelpers = require("../auth/helpers");
const userQueries = require("../db/queries/users");
const passport = require("../auth/passport");

router.post("/signup", async (req, res, next) => {
  try {
    const passwordDigest = await authHelpers.hashPassword(req.body.password);
    const userInfo = {
      username: req.body.username,
      password: passwordDigest,
    };
    let newUser = await userQueries.addNewUser(userInfo);
    res.json({
      payload: newUser,
      msg: "Success adding a new user",
      err: false,
    });
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "failure to add user",
      err: true,
    });
  }
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log(req.body);
  res.json({
    payload: req.user,
    msg: "User successfully logged in",
    err: false,
  });
});

router.get("/logout", (req, res, next) => {
  res.send("/logout route");
});

module.exports = router;
