const router = require("express").Router();
const { Sale, Employee, Store, Item } = require("../../models");

// Get all Sales

router.get("/", async (req, res) => {
  try {
    const saleData = await Sale.findAll({});
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a single sale with all items, employee, and store

router.get("/:id", async (req, res) => {
  try {
    const saleData = await Sale.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: ["id", "item_name", "item_price"],
        },
        {
          model: Employee,
          attributes: ["id", "employee_name"],
        },
        {
          model: Store,
          attributes: ["id", "store_name"],
        },
      ],
    });
    if (!saleData) {
      res.status(404).json({ message: "No sale found!" });
      return;
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add a new sale

router.post("/", async (req, res) => {
  try {
    const saleData = await Sale.create(req.body);
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update a sale

router.put("/:id", async (req, res) => {
  try {
    const saleData = await Sale.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!saleData) {
      res.status(404).json({ message: "No sale found!" });
      return;
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a sale

router.delete("/:id", async (req, res) => {
  try {
    const saleData = await Sale.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!saleData) {
      res.status(404).json({ message: "No sale found!" });
      return;
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
