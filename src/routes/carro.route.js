const { Router } = require("express");
const { route } = require("express/lib/router");
require("express-async-errors");
const { UploadMiddleware, UploadExcelMiddleware } = require("../middlewares");

module.exports = function ({ CarroController }) {
  const router = Router();

  router.post("/insertar", UploadMiddleware, CarroController.insertar);
  router.post("/getAll", CarroController.getAll);
  router.get("/image", CarroController.getImage);
  router.post("/eliminar", CarroController.delete);
  router.post("/excel", UploadExcelMiddleware, CarroController.getExcel);

  return router;
};
