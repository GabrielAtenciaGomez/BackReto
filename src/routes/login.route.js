const { Router } = require("express");
const { route } = require("express/lib/router");

module.exports = function ({ LoginController }) {
  const router = Router();

  router.post("/signin", LoginController.singIn);

  return router;
};
