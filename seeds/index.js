const seedChain = require("./chain-seeds");
const seedStore = require("./store-seeds");
const seedEmployee = require("./employee-seeds");
const seedItem = require("./item-seeds");
const seedSale = require("./sale-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedChain();
  console.log("\n----- CHAIN SEEDED -----\n");
  await seedStore();
  console.log("\n----- STORE SEEDED -----\n");
  await seedEmployee();
  console.log("\n----- EMPLOYEE SEEDED -----\n");
  await seedItem();
  console.log("\n----- ITEM SEEDED -----\n");
  await seedSale();
  console.log("\n----- SALE SEEDED -----\n");
  process.exit(0);
};

seedAll();
