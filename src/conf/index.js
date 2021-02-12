if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  BDNAME: process.env.BDNAME,
  USERBD: process.env.USERBD,
  PASSBD: process.env.PASSBD,
  SERVERBD: process.env.SERVERBD,
  PORTBD: process.env.PORTBD,
};
