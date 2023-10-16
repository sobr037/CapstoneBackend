const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class GreenCoffee extends Model {}

GreenCoffee.init(
  {
    producer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    green_stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roasted_stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffee_origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffee_elevation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffee_variety: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffee_processing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffee_certifications: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'green_coffee',
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = GreenCoffee;