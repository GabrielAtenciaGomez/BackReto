const BaseRepository = require("./base.repositories");

let _db;
class UserRepository extends BaseRepository {
  constructor({ db }) {
    _db = db;
    super(_db, "usuario");
  }
}
module.exports = UserRepository;
