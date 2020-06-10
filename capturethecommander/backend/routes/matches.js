const express = require("express");
const router = express.Router();
const matchQueries = require("../db/queries/matches");

router.get("/", async (req, res, next) => {
  try {
    let matches = await matchQueries.getAllMatches();
    res.json({
      payload: matches,
      msg: "retreived all matches",
      err: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      payload: null,
      msg: "failed to retrieve all matches",
      err: true,
    });
  }
});

router.post("/all", async (req, res, next) => {
  try {
    const matchInfo = {
      player1: req.body.player1,
      player2: req.body.player2,
      whoWon: req.body.whoWon,
    };
    let newmatch = await matchQueries.addNewMatch(matchInfo);
    console.log(newmatch);
    res.json({
      payload: newmatch,
      msg: "success adding a match",
      err: false,
    });
  } catch (err) {
    console.log(err);
    res.json(500).json({
      payload: null,
      msg: "failure to get add a match",
      err: true,
    });
  }
});

module.exports = router;
