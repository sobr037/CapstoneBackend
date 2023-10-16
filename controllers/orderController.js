const Models = require("../models");

const getOrders = (res) => {
  Models.Order.findAll({}).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const getOrderById = (orderId, res) => {
  Models.Order.findByPk(orderId).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const getOrderByTrace = (orderTrace, res) => {
  Models.Order.findOne({ where: { order_trace: orderTrace } }).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

const importOrder = (data, res) => {
  Models.Order.create(data).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    throw err;
  });
}

module.exports = {
  getOrders,
  getOrderById,
  getOrderByTrace,
  importOrder
}
