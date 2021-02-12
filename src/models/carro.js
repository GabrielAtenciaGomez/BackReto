"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carros.init(
    {
      modelo: DataTypes.STRING,
      marca: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "carro",
    }
  );
  return carros;
};
