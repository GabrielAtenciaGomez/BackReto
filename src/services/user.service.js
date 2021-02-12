const BaseService = require("./base.service");
const usuario = require("./models/usuario");

let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    _userRepository = UserRepository;
    super(_userRepository, usuario);
  }

  getUserById(id) {
    return _userRepository.get(id);
  }
}

module.exports = UserService;
