const { sign } = require("jsonwebtoken");
const { JWT_SECRET } = require("../conf");

module.exports.generateToken = function (user) {
  return sign({ user }, JWT_SECRET, { expiresIn: "24h" });
};
