const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Order extends Model {}

Order.init(
  {
    order_id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    order_date: { type: DataTypes.STRING, allowNull: false },
    order_customer: { type: DataTypes.STRING, allowNull: false },
    order_total: { type: DataTypes.STRING, allowNull: false },
    order_count: { type: DataTypes.STRING, allowNull: false },
    order_volume: { type: DataTypes.STRING, allowNull: false },
    order_trace: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "orders",
    tableName: "order_items",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Order;
