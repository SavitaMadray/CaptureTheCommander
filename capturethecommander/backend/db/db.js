const pgp = require("pg-promise")();
const cn = "postgres://localhost:5432/capturecommander_db";
const db = pgp(cn);

module.exports = db;
