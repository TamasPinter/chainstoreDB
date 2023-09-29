const router = require("express").Router();
const chainRoutes = require("./chain-routes");
const storeRoutes = require("./store-routes");
const employeeRoutes = require("./employee-routes");
const itemRoutes = require("./item-routes");
const saleRoutes = require("./sale-routes");

router.use("/chain", chainRoutes);
router.use("/store", storeRoutes);
router.use("/employee", employeeRoutes);
router.use("/item", itemRoutes);
router.use("/sale", saleRoutes);

module.exports = router;
