"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carro.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      modelo: DataTypes.STRING,
      marca: DataTypes.STRING,
      foto: DataTypes.STRING,
      fecha_ingreso: DataTypes.DATEONLY,
      valor: DataTypes.DOUBLE,
      estado: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "carro",
    }
  );
  return carro;
};
