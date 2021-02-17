require("dotenv").config();
module.exports = {
  username: process.env.USERBD,
  password: process.env.PASSBD,
  database: process.env.BDNAME,
  host: process.env.SERVERBD,
  dialect: "mysql",
  timezone: "-05:00",
};
