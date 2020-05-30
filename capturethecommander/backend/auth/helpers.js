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

module.exports = {
  hashPassword,
  comparePasswords,
};
