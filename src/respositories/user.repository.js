const BaseRepository = require("./base.repositories");

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "usuario");
  }
}
module.exports = UserRepository;
