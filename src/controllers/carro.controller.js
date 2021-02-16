const { DATE } = require("sequelize");

let _carroService;

class CarroController {
  constructor({ CarroService }) {
    _carroService = CarroService;
  }

  async createNewCar(req, res) {
    const { placa, modelo, marca, ingreso, foto } = req["body"];
    const tarifaBase = 200000;

    let valor = 200000;
    var fecha = ingreso ? new Date(ingreso) : new Date();

    if (ingreso) {
      if (fecha.getDate() % 2 === 0) {
        valor += tarifaBase * 0.05;
      }
      if (parseInt(modelo) <= 1997) {
        valor += tarifaBase * 0.2;
      }
    }
    const carro = {
      id: placa,
      modelo: modelo,
      marca: marca,
      foto: placa,
      valor: valor,
      createdAt: fecha,
      updatedAt: ingreso || fecha,
    };
    console.log(carro);

    res.send(carro);
    //_carroService.create(carro);
  }
}
module.exports = CarroController;
