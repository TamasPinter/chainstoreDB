const router = require("express").Router();

const { Chain, Store, Employee, Item, Sale } = require("../../models");

// Get all information for whole chain and all stores
router.get("/", async (req, res) => {
  try {
    const chainData = await Chain.findAll({
      include: {
        model: Store,
      },
    });
    res.status(200).json(chainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single chain with all stores, employees, and sales

router.get("/:id", async (req, res) => {
  try {
    const chainData = await Chain.findByPk(req.params.id, {
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
