const router = require("express").Router();
const { Store, Employee, Item, Sale } = require("../../models");

//get all items, dont include any other models

router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single item, include all sales and the store and employee that made the sale

router.get("/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
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
        {
          model: Employee,
          attributes: ["id", "employee_name"],
        },
      ],
    });
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add a new item

router.post("/", async (req, res) => {
  try {
    const itemData = await Item.create(req.body);
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update an item

router.put("/:id", async (req, res) => {
  try {
    const itemData = await Item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!itemData) {
      res.status(404).json({ message: "No item found!" });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete an item

router.delete("/:id", async (req, res) => {
  try {
    const itemData = await Item.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!itemData) {
      res.status(404).json({ message: "No item found!" });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
