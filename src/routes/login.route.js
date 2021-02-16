const { Router } = require("express");
const { route } = require("express/lib/router");
const { AutenticationMiddleWare } = require("../middlewares");
require("express-async-errors");

module.exports = function ({ LoginController }) {
  const router = Router();

  router.post("/signin", LoginController.singIn);
  router.post("/isloged", AutenticationMiddleWare, LoginController.isLoged);

  return router;
};
