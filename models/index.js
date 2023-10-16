'use strict'
const User = require('./user') //require the model
const GreenCoffee = require('./greenCoffee');
const CoffeeProfile = require('./coffeeProfile');
const Order = require('./order');

async function init() {
    await User.sync(); //sync the model
    await GreenCoffee.sync(); // Sync the Green Coffee model
    await CoffeeProfile.sync();
    await Order.sync();
};
init();

module.exports = {
    User,
    GreenCoffee,
    CoffeeProfile,
    Order, //export the model
};