const Models = require("../models");

const getGreenCoffeeInventory = (res) => {
  Models.GreenCoffee.findAll({}).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const createGreenCoffeeInventory = (data, res) => {
  Models.GreenCoffee.create(data).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const updateGreenCoffeeInventory = (data, res) => {
  const { producer_name } = data;
  Models.GreenCoffee.update(data, { where: { producer_name } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    }).catch(err => {
      throw err;
    });
}

module.exports = {
  getGreenCoffeeInventory,
  createGreenCoffeeInventory,
  updateGreenCoffeeInventory
};