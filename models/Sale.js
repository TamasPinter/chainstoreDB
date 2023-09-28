const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sale extends Model {}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    sale_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "item",
        key: "id",
      },
    },
    sale_item_two: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "item",
        key: "id",
      },
    },
    sale_item_three: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "item",
        key: "id",
      },
    },
    sale_item_four: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "item",
        key: "id",
      },
    },
    sale_item_five: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "item",
        key: "id",
      },
    },
    sale_employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "employee",
        key: "id",
      },
    },
    sale_store: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "store",
        key: "id",
      },
    },
    sale_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sale",
  }
);

module.exports = Sale;
