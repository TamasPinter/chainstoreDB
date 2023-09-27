const { Employee } = require("../models");

const employeeData = [
  {
    employee_name: "Oliver Queen",
    hired_date: "01/01/2010",
    contact_number: "212-555-1212",
    sales_made: 2,
    store_id: 1,
  },
  {
    employee_name: "Barry Allen",
    hired_date: "01/01/2010",
    contact_number: "212-555-1234",
    sales_made: 3,
    store_id: 1,
  },
  {
    employee_name: "Kaitlyn Snow",
    hired_date: "01/01/2010",
    contact_number: "212-555-4321",
    sales_made: 0,
    store_id: 1,
  },
  {
    employee_name: "Cisco Ramon",
    hired_date: "01/01/2010",
    contact_number: "212-555-5678",
    sales_made: 1,
    store_id: 1,
  },
  {
    employee_name: "John Diggle",
    hired_date: "03/03/2010",
    contact_number: "224-555-8642",
    sales_made: 2,
    store_id: 2,
  },
  {
    employee_name: "Felicity Smoak",
    hired_date: "03/03/2010",
    contact_number: "224-555-1254",
    sales_made: 3,
    store_id: 2,
  },
  {
    employee_name: "Roy Harper",
    hired_date: "03/03/2010",
    contact_number: "224-555-6743",
    sales_made: 1,
    store_id: 2,
  },
  {
    employee_name: "Laurel Lance",
    hired_date: "03/03/2010",
    contact_number: "224-555-9765",
    sales_made: 0,
    store_id: 2,
  },
  {
    employee_name: "Bruce Wayne",
    hired_date: "05/05/2010",
    contact_number: "555-555-5555",
    sales_made: 3,
    store_id: 3,
  },
  {
    employee_name: "Dick Grayson",
    hired_date: "05/05/2010",
    contact_number: "555-555-1235",
    sales_made: 2,
    store_id: 3,
  },
  {
    employee_name: "Selena Kyle",
    hired_date: "05/05/2010",
    contact_number: "555-212-5623",
    sales_made: 1,
    store_id: 3,
  },
  {
    employee_name: "Viktor Freeze",
    hired_date: "05/05/2010",
    contact_number: "555-555-4598",
    sales_made: 1,
    store_id: 3,
  },
  {
    employee_name: "Oswald Cobblepot",
    hired_date: "12/12/2012",
    contact_number: "321-234-8734",
    sales_made: 1,
    store_id: 4,
  },
  {
    employee_name: "Poison Ivy",
    hired_date: "12/12/2012",
    contact_number: "525-876-1234",
    sales_made: 0,
    store_id: 4,
  },
  {
    employee_name: "Harvey Dent",
    hired_date: "12/12/2012",
    contact_number: "555-555-1298",
    sales_made: 1,
    store_id: 4,
  },
  {
    employee_name: "Lucius Fox",
    hired_date: "12/12/2012",
    contact_number: "555-212-4587",
    sales_made: 2,
    store_id: 4,
  },
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;
