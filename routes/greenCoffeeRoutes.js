const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
  Controllers.greenCoffeeController.getGreenCoffeeInventory(res);
});

router.post('/new', (req, res) => {
  Controllers.greenCoffeeController.createGreenCoffeeInventory(req.body, res);
});

router.put('/update', (req, res) => {
  Controllers.greenCoffeeController.updateGreenCoffeeInventory(req.body, res);
});

module.exports = router;