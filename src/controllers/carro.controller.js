const { DATE } = require("sequelize");
const fs = require("fs");
const path = require("path");
let _carroService;
const XLSX = require("xlsx");

function moveFile(name) {
  let newname;
  fs.readdirSync("img/temp").forEach((file) => {
    console.log(file.split(".")[1]);
    newname = "img/" + name + "." + file.split(".")[1];
    fs.rename("img/temp/" + file, newname, (err) => {
      console.error(err);
    });
  });
  return newname;
}
function calcularValor(tarifaBase, fecha, modelo) {
  let valor = 200000;

  if (fecha.getDate() % 2 === 0) {
    valor += tarifaBase * 0.05;
  }
  if (parseInt(modelo) <= 1997) {
    valor += tarifaBase * 0.2;
  }
  return valor;
}
class CarroController {
  constructor({ CarroService }) {
    _carroService = CarroService;
  }

  async insertar(req, res) {
    let { placa, modelo, marca, ingreso, foto, estado } = req["body"];
    var fecha = ingreso ? new Date(ingreso) : new Date();

    foto = foto !== "" ? moveFile(placa).split("/")[1] : "";

    const carro = {
      id: placa,
      modelo: modelo,
      marca: marca,
      foto: foto,
      estado: estado || false,
      fecha_ingreso: fecha,
      valor: calcularValor(200000, fecha, modelo),
    };

    const carroConsulta = await _carroService.get(placa);
    let resultado;
    let operacion;
    if (!carroConsulta) {
      resultado = await _carroService.create(carro);
      operacion = "insertado";
    } else {
      carro.foto = foto === "" ? carroConsulta.foto : foto;
      await _carroService.update(carro.id, carro);
      resultado = await _carroService.get(placa);
      operacion = "actualizado";
    }
    res.send({ operacion, resultado });
  }

  async delete(req, res) {
    const { id } = req["body"];
    const carro = await _carroService.get(id);

    if (await _carroService.delete(carro.id)) {
      try {
        if (carro.foto != "") fs.unlinkSync("img/" + carro.foto);
      } catch (error) {
        console.log(error);
      }

      res.send({ resultado: true, carro });
    } else {
      res.send({ resultado: false });
    }
  }
  async getExcel(req, res) {
    console.log("recivido");
    const workBook = XLSX.readFile(
      path.join(__dirname, "../../excel/archivo.xlsx")
    );
    const workSheets = workBook.SheetNames;
    const dataExcel = XLSX.utils.sheet_to_json(workBook.Sheets[workSheets[0]]);
    dataExcel.map(async (x) => {
      //---------------------------------------------------------
      let { placa, modelo, marca, fecha_ingreso } = x;
      var fecha = new Date(fecha_ingreso);
      let estado = true;

      const carro = {
        id: placa,
        modelo: modelo,
        marca: marca,
        foto: "",
        estado: estado,
        fecha_ingreso: fecha_ingreso,
        valor: calcularValor(200000, fecha, modelo),
      };

      const carroConsulta = await _carroService.get(placa);

      let resultado;
      let operacion;

      if (!carroConsulta) {
        resultado = await _carroService.create(carro);
        operacion = "insertado";
      } else {
        carro.foto = carroConsulta.foto || "";
        await _carroService.update(carro.id, carro);
        resultado = await _carroService.get(placa);
        operacion = "actualizado";
      }
    });
    //---------------------------------------------------------

    res.send("recivido");
  }

  async getAll(req, res) {
    let resultado = await _carroService.getAll();
    res.send(resultado);
  }
  async getImage(req, res) {
    res.sendFile(
      path.join(__dirname, "../../img/" + req.query.id),
      function (err) {
        if (err) {
          res.send("img no encontrada");
        } else {
          console.log("Sent:", req.query.id);
        }
      }
    );
  }
}

module.exports = CarroController;
