const BaseRepository = require("./base.repositories");

class CarroRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "carro");
  }
}
