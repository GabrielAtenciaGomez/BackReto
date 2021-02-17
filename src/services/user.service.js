const BaseService = require("./base.service");
const usuario = require("./models/usuario");

let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    _userRepository = UserRepository;
    super(_userRepository, usuario);
    console.log("user_service: ");
  }
}

module.exports = UserService;
