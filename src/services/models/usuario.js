const bcrypt = require("bcrypt");
class Usuario {
  id = 0;
  nombre = null;
  apellidos = null;
  correo = null;
  contrasenia = null;
  createdAt = null;
  updatedAt = null;

  comparePassword(pass) {
    return bcrypt.compareSync(pass, this.contrasenia);
  }
}

module.exports = Usuario;
