const { Chain } = require("../models");

const chainData = [
  {
    chain_name: "Value Electronics",
    chain_description: "All your top tier electronics at unbeatable prices!",
    chain_established: "01/01/2010",
    chain_headquarters: "Albuquerque, New Mexico",
  },
];

const seedChain = () => Chain.bulkCreate(chainData);

module.exports = seedChain;
