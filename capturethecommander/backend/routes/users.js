const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  console.log(req.session);

  try {
    let users = await userQueries.getAllUsers();
    res.json({
      payload: users,
      msg: "Retreived all users",
      err: false,
    });
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "failed to retrieve all users",
      err: true,
    });
  }
});

module.exports = router;
