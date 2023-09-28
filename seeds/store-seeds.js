const { Store } = require("../models");

const storeData = [
  {
    store_name: "Dallas Value Electronics",
    store_number: 1,
    store_address: "1234 Main Street, Dallas, TX 75201",
    store_open: "01/01/2010 00:00:00",
    store_parent: 1,
    store_employees: 4,
  },
  {
    store_name: "Houston Value Electronics",
    store_number: 2,
    store_address: "1234 River Road, Houston, TX 77001",
    store_open: "03/03/2010 00:00:00",
    store_parent: 1,
    store_employees: 4,
  },
  {
    store_name: "Austin Value Electronics",
    store_number: 3,
    store_address: "1134 N. Lamar Road, Austin, TX 78709",
    store_open: "05/05/2010 00:00:00",
    store_parent: 1,
    store_employees: 4,
  },
  {
    store_name: "San Antonio Value Village",
    store_number: 4,
    store_address: "670 S. Alamo Road, San Antonio, TX 77608",
    store_open: "12/12/2012 00:00:00",
    store_parent: 1,
    store_employees: 4,
  },
];

const seedStore = () => Store.bulkCreate(storeData);

module.exports = seedStore;
