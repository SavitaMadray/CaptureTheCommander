const db = require("../db");

const getAllMatches = async () => {
  const matches = await db.any("SELECT * FROM matches");
  return matches;
};

const addNewMatch = async (matches) => {
  const addMatchQuery = `INSERT INTO matches(player1, player2, whoWon)
                      VALUES($/player1/, $/player2/, $/whowon/)
                      RETURNING *`;

  const newMatch = await db.any(addMatchQuery, matches);
  return newMatch;
};

module.exports = {
  getAllMatches,
  addNewMatch,
};
