const { Router } = require("express");
const { route } = require("express/lib/router");
require("express-async-errors");

module.exports = function ({ CarroController }) {
  const router = Router();

  router.post("/insertar", CarroController.createNewCar);

  return router;
};
