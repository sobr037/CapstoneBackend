const Models = require("../models");

const getCoffeeProfiles = (res) => {
  Models.CoffeeProfile.findAll({}).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const createCoffeeProfile = (data, res) => {
  Models.CoffeeProfile.create(data).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const updateCoffeeProfile = (data, res) => {
  const { profile_name } = data;
  Models.CoffeeProfile.update(data, { where: { profile_name } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    }).catch(err => {
      throw err;
    });
}

module.exports = {
  getCoffeeProfiles,
  createCoffeeProfile,
  updateCoffeeProfile
};