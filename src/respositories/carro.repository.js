const CarroService = require("../services/carro.service");
const BaseRepository = require("./base.repositories");
let _db;
class CarroRepository extends BaseRepository {
  constructor({ db }) {
    _db = db;
    super(_db, "carro");
  }
}

module.exports = CarroRepository;
