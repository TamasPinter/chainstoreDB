const router = require("express").Router();
const { Chain, Store, Employee, Item, Sale } = require("../../models");

// Get all stores

router.get("/", async (req, res) => {
  try {
    const storeData = await Store.findAll({
      include: [
        {
          model: Employee,
          attributes: ["id", "employee_name"],
        },
        {
          model: Item,
          attributes: ["id", "item_name", "item_price"],
        },
      ],
    });
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single store with all employees and sales and a total of all sales for this store

router.get("/:id", async (req, res) => {
  try {
    const storeData = await Store.findByPk(req.params.id, {
      include: [
        {
          model: Employee,
          attributes: ["id", "employee_name"],
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
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add a new store

router.post("/", async (req, res) => {
  try {
    const storeData = await Store.create(req.body);
    res.status(200).json(storeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update a store

router.put("/", async (req, res) => {
  try {
    const storeData = await Store.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    if (!storeData) {
      res.status(404).json({ message: "No store found!" });
      return;
    }
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a store

router.delete("/:id", async (req, res) => {
  try {
    const storeData = await Store.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!storeData) {
      res.status(404).json({ message: "No store found!" });
      return;
    }
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
