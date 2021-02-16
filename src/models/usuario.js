"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      correo: DataTypes.STRING,
      contrasenia: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usuario",
    }
  );
  return usuario;
};
