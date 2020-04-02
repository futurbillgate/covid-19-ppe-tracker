'use strict';
module.exports = (sequelize, DataTypes) => {
  const PPEType = sequelize.define('PPEType', {
    name: DataTypes.STRING
  }, {});
  PPEType.associate = function(models) {
    // associations can be defined here
  };
  return PPEType;
};