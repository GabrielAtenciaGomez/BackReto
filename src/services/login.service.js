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

    console.log(userExist);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User not exist";
      throw error;
    }

    const validPassword = userExist.comparePassword(password);
    if (!validPassword) {
      const err = new Error();
      err.status = 400;
      err.message = "passwors invalid";
      throw err;
    }

    const userToken = {
      id: userExist.id,
      name: userExist.nombre,
      surname: userExist.apellidos,
      correo: userExist.correo,
    };

    const token = jwtHelper.generateToken(userToken);

    return { token, userToken };
  }

  async isLoged() {
    return true;
  }
}

module.exports = LoginService;
