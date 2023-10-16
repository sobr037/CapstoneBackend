const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.orderController.getOrders(res);
});

router.get("/:id", (req, res) => {
  Controllers.orderController.getOrderById(req.params.id, res);
});

router.get("/order_trace/:trace", (req, res) => {
  Controllers.orderController.getOrderByTrace(req.params.trace, res);
});

router.post("/import", (req, res) => {
  Controllers.orderController.importOrder(req.body, res);
});

module.exports = router;
