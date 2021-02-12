const container = require("./src/startup/container");
const server = container.resolve("app");
const { USERBD, SERVERBD, PORTBD, BDNAME, PASSBD } = container.resolve(
  "config"
);
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(BDNAME, USERBD, PASSBD, {
  dialect: "mysql",
  host: SERVERBD,
  port: PORTBD,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("conectado a bd");
    server.start();
  })
  .catch((error) => {
    console.log("Sea ha producido un error " + error);
  });
