const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Store extends Model {}

Store.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    store_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_open: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    store_parent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "chain",
        key: "id",
      },
    },
    store_employees: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "employee",
        key: "store_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "store",
  }
);

module.exports = Store;
