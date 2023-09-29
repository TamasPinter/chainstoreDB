const router = require("express").Router();
const { Chain, Store, Employee, Item, Sale } = require("../../models");

//Get all employees

router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      include: { model: Store },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a single employee with their store and sales

router.get("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Store,
          attributes: ["id", "store_name"],
        },
        {
          model: Sale,
          attributes: [
            "id",
            "sale_date",
            "sale_item",
            "sale_item_two",
            "sale_item_three",
            "sale_item_four",
            "sale_item_five",
            "sale_employee",
            "sale_store",
            "sale_total",
          ],
        },
      ],
    });
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add a new employee

router.post("/", async (req, res) => {
  try {
    const employeeData = await Employee.create(req.body);
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update an employee

router.put("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!employeeData) {
      res.status(404).json({ message: "No employee found!" });
      return;
    }
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete an Employee

router.delete("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!employeeData) {
      res.status(404).json({ message: "No employee found!" });
      return;
    }
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
