const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Chain extends Model {}

Chain.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    chain_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chain_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chain_established: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    chain_headquarters: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "chain",
  }
);

module.exports = Chain;
