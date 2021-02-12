const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { NotFoundMiddleWare, ErrorMiddleWare } = require("../middlewares");
require("express-async-errors");

module.exports = function ({ LoginRoutes }) {
  const router = express.Router();
  const apiRoute = express.Router();

  apiRoute.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoute.use("/login", LoginRoutes);

  apiRoute.use("/carros", (req, res) => {
    res.send({ mesage: "holaa carros" });
  });

  router.use("/v1/api", apiRoute);
  router.use(NotFoundMiddleWare);
  router.use(ErrorMiddleWare);
  return router;
};
