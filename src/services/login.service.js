const { username } = require("../conf/sequelize.conf");
const { jwtHelper } = require("../helpers");

let _userService = null;

class LoginService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async singUp() {}

  async singIn(user) {
    const { id, password } = user;
    const userExist = await _userService.get(id);

    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User not exist";
      throw error;
    }
    return userExist;
  }
}

module.exports = LoginService;
