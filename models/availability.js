'use strict';
module.exports = (sequelize, DataTypes) => {
  const Availability = sequelize.define('Availability', {
    name: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  Availability.associate = function(models) {
    // associations can be defined here
    Availability.belongsTo(models.PPEType, {
      onDelete: "SET NULL",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Availability;
};