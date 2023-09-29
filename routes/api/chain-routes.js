const router = require("express").Router();

const { Chain, Store, Employee, Item, Sale } = require("../../models");

// Get all information for whole chain and all stores
router.get("/", async (req, res) => {
  try {
    const chainData = await Chain.findAll({
      include: [
        {
          model: Store,
          attributes: [
            "id",
            "store_name",
            "store_number",
            "store_address",
            "store_open",
            "store_parent",
            "store_employees",
          ],
        },
        {
          model: Employee,
          attributes: [
            "id",
            "employee_name",
            "employee_position",
            "employee_store",
          ],
        },
        {
          model: Item,
          attributes: [
            "id",
            "item_name",
            "item_price",
            "item_stock",
            "item_store",
          ],
        },
        {
          model: Sale,
          attributes: [
            "id",
            "sale_date",
            "sale_item",
            "sale_quantity",
            "sale_employee",
            "sale_store",
          ],
        },
      ],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new chain
router.post("/", async (req, res) => {
  try {
    const chainData = await Chain.create(req.body);
    res.status(200).json(chainData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update a chain
router.put("/:id/", async (req, res) => {
  try {
    const chainData = await Chain.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!chainData) {
      res.status(404).json({ message: "No chain found!" });
      return;
    }
    res.status(200).json(chainData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete a chain
router.delete("/:id", async (req, res) => {
  try {
    const chainData = await Chain.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!chainData) {
      res.status(404).json({ message: "No chain found!" });
      return;
    }
    res.status(200).json(chainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
