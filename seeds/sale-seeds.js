const { Sale } = require("../models");

const saleData = [
  {
    sale_date: "01/01/2010",
    sale_item: 1,
    sale_employee: 1,
    sale_total: 499.99,
  },
  {
    sale_date: "01/10/2010",
    sale_item: 3,
    sale_employee: 1,
    sale_total: 899.99,
  },
  {
    sale_date: "01/08/2010",
    sale_item: 2,
    sale_employee: 2,
    sale_total: 799.99,
  },
  {
    sale_date: "01/12/2010",
    sale_item: 1,
    sale_employee: 2,
    sale_total: 499.99,
  },
  {
    sale_date: "01/18/2010",
    sale_item: 4,
    sale_employee: 2,
    sale_total: 299.99,
  },
  {
    sale_date: "01/20/2010",
    sale_item: 1,
    sale_employee: 4,
    sale_total: 499.99,
  },
  {
    sale_date: "03/03/2010",
    sale_item: 6,
    sale_employee: 5,
    sale_total: 189.99,
  },
  {
    sale_date: "03/05/2010",
    sale_item: 8,
    sale_employee: 5,
    sale_total: 79.99,
  },
  {
    sale_date: "03/04/2010",
    sale_item: 7,
    sale_employee: 6,
    sale_total: 15.99,
  },
  {
    sale_date: "03/06/2010",
    sale_item: 9,
    sale_employee: 6,
    sale_total: 69.99,
  },
  {
    sale_date: "03/18/2010",
    sale_item: 10,
    sale_employee: 6,
    sale_total: 29.99,
  },
  {
    sale_date: "03/15/2010",
    sale_item: 7,
    sale_employee: 7,
    sale_total: 15.99,
  },
  {
    sale_date: "05/05/2010",
    sale_item: 11,
    sale_employee: 9,
    sale_total: 599.99,
  },
  {
    sale_date: "05/06/2010",
    sale_item: 12,
    sale_employee: 9,
    sale_total: 599.99,
  },
  {
    sale_date: "05/07/2010",
    sale_item: 13,
    sale_employee: 9,
    sale_total: 299.99,
  },
  {
    sale_date: "05/15/2010",
    sale_item: 14,
    sale_employee: 10,
    sale_total: 79.99,
  },
  {
    sale_date: "05/21/2010",
    sale_item: 15,
    sale_employee: 10,
    sale_total: 59.99,
  },
  {
    sale_date: "05/22/2010",
    sale_item: 12,
    sale_employee: 11,
    sale_total: 599.99,
  },
  {
    sale_date: "05/28/2010",
    sale_item: 14,
    sale_employee: 12,
    sale_total: 79.99,
  },
  {
    sale_date: "12/12/2012",
    sale_item: 1,
    sale_employee: 13,
    sale_total: 499.99,
  },
  {
    sale_date: "12/24/2012",
    sale_item: 16,
    sale_employee: 15,
    sale_total: 499.99,
  },
  {
    sale_date: "12/28/2012",
    sale_item: 17,
    sale_employee: 16,
    sale_total: 199.99,
  },
  {
    sale_date: "12/30/2010",
    sale_item: 18,
    sale_employee: 16,
    sale_total: 149.99,
  },
];

const seedSales = () => Sale.bulkCreate(saleData);

module.exports = seedSales;
