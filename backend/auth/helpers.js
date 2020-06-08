const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const password_digest = await bcrypt.hash(password, 10);
    return password_digest;
  } catch (err) {
    console.log("err", err);
  }
};

const comparePasswords = async (candidatePassword, passwordDigest) => {
  try {
    const match = await bcrypt.compare(candidatePassword, passwordDigest);
    return match;
  } catch (err) {
    console.log("err", err);
  }
};

const loginRequired = (req, res, next) => {
  if (req.user) return next();
  res.status(401).json({
    payload: null,
    msg: "you are not logged in",
    err: true,
  });
};

module.exports = {
  hashPassword,
  comparePasswords,
  loginRequired,
};
