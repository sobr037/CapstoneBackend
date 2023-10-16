const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class CoffeeProfile extends Model {}

CoffeeProfile.init(
  {
    profile_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_producers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'coffee_profiles',
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = CoffeeProfile;