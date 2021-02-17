const { response } = require("express");
let formidable = require("formidable");
module.exports = (req, res, next) => {
  const form = formidable.IncomingForm();
  let archivoEnviado = false;

  form.once("error", console.error);

  form
    .parse(req, (err, field, files) => {
      console.log("fields:", field);

      field.foto = archivoEnviado ? field.placa : "";
      req.body = field;

      next();
    })
    .on("fileBegin", (nam, file) => {
      archivoEnviado = true;
      file.path = "img/temp/" + file.name;
    });
};
