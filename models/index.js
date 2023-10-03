const Chain = require("./Chain");
const Store = require("./Store");
const Employee = require("./Employee");
const Item = require("./Item");
const Sale = require("./Sale");

//create associations
Chain.hasMany(Store, {
  foreignKey: "chain_id",
});

Store.belongsTo(Chain, {
  foreignKey: "store_parent",
});

Store.hasMany(Employee, {
  foreignKey: "store_id",
});

Employee.belongsTo(Store, {
  foreignKey: "store_id",
});

Employee.hasMany(Sale, {
  foreignKey: "employee_id",
});

Sale.belongsTo(Employee, {
  foreignKey: "employee_id",
});

Item.hasMany(Sale, {
  foreignKey: "item_id",
});

Sale.belongsTo(Item, {
  foreignKey: "item_id",
});

Store.hasMany(Sale, {
  foreignKey: "store_id",
});

Sale.belongsTo(Store, {
  foreignKey: "store_id",
});

module.exports = { Chain, Store, Employee, Item, Sale };
