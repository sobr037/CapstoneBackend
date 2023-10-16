const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
  Controllers.coffeeProfileController.getCoffeeProfiles(res);
});

router.post('/new', (req, res) => {
  Controllers.coffeeProfileController.createCoffeeProfile(req.body, res);
});

router.put('/update', (req, res) => {
  Controllers.coffeeProfileController.updateCoffeeProfile(req.body, res);
});

module.exports = router;