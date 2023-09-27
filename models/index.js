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
  foreignKey: "chain_id",
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

Store.hasMany(Item, {
  foreignKey: "store_id",
});

Item.belongsTo(Store, {
  foreignKey: "store_id",
});

Item.hasMany(Sale, {
  foreignKey: "item_id",
});

Sale.belongsTo(Item, {
  foreignKey: "item_id",
});

module.exports = { Chain, Store, Employee, Item, Sale };
