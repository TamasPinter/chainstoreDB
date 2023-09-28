const { Item } = require("../models");

const itemData = [
  {
    item_name: "Television",
    item_description: " A 50 inch LED TV",
    //have multiple stores listed for item_store
    item_store: 1,
    item_department: "Electronics",
    item_price: 499.99,
  },
  {
    item_name: "Laptop",
    item_description: "A 15 inch home laptop",
    item_store: 1,
    item_department: "Electronics",
    item_price: 799.99,
  },
  {
    item_name: "Desktop",
    item_description: "A 17 inch home desktop",
    item_store: 1,
    item_department: "Electronics",
    item_price: 899.99,
  },
  {
    item_name: "Tablet",
    item_description: "A 10 inch tablet",
    item_store: 1,
    item_department: "Electronics",
    item_price: 299.99,
  },
  {
    item_name: "Smart Watch",
    item_description: "A standard smart watch",
    item_store: 1,
    item_department: "Electronics",
    item_price: 159.99,
  },
  {
    item_name: "Cell Phone",
    item_description: "A standard cell phone",
    item_store: 2,
    item_department: "Phones",
    item_price: 189.99,
  },
  {
    item_name: "Cell Phone Case",
    item_description: "A standard cell phone case",
    item_store: 2,
    item_department: "Phones",
    item_price: 15.99,
  },
  {
    item_name: "Bluetooth Earbuds",
    item_description: "A standard pair of bluetooth earbuds",
    item_store: 2,
    item_department: "Phones",
    item_price: 79.99,
  },
  {
    item_name: "Headphones",
    item_description: "A standard pair of headphones",
    item_store: 2,
    item_department: "Phones",
    item_price: 69.99,
  },
  {
    item_name: "Phone Cleaning Kit",
    item_description: "A phone cleaning kit",
    item_store: 2,
    item_department: "Phones",
    item_price: 29.99,
  },
  {
    item_name: "Xbox X",
    item_description: "Xbox Series X",
    item_store: 3,
    item_department: "Gaming",
    item_price: 599.99,
  },
  {
    item_name: "Playstation 5",
    item_description: "Playstation 5",
    item_store: 3,
    item_department: "Gaming",
    item_price: 559.99,
  },
  {
    item_name: "Nintendo Switch",
    item_description: "Nintendo Switch",
    item_store: 3,
    item_department: "Gaming",
    item_price: 299.99,
  },
  {
    item_name: "Video Game",
    item_description: "A standard video game",
    item_store: 3,
    item_department: "Gaming",
    item_price: 79.99,
  },
  {
    item_name: "Controller",
    item_description: "A standard video game console controller",
    item_store: 3,
    item_department: "Gaming",
    item_price: 59.99,
  },
  {
    item_name: "Speaker System",
    item_description: "A standard DOLBY speaker system",
    item_store: 4,
    item_department: "Audio",
    item_price: 499.99,
  },
  {
    item_name: "Sound Bar",
    item_description: "A standard sound bar",
    item_store: 4,
    item_department: "Audio",
    item_price: 199.99,
  },
  {
    item_name: "Record Player",
    item_description: "A standard record player",
    item_store: 4,
    item_department: "Audio",
    item_price: 149.99,
  },
  {
    item_name: "CD",
    item_description: "A standard CD",
    item_store: 4,
    item_department: "Audio",
    item_price: 15.99,
  },
  {
    item_name: "Vinyl Record",
    item_description: "A standard vinyl record",
    item_store: 4,
    item_department: "Audio",
    item_price: 49.99,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
