const carro = require("./models/carro");
const BaseService = require("./base.service");

let _carroRespository;
class CarroService extends BaseService {
  constructor({ CarroRepository }) {
    _carroRespository = CarroRepository;
    super(_carroRespository, carro);
    console.log("carro_service");
  }
}

module.exports = CarroService;
