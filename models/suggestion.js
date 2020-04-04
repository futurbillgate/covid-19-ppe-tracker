'use strict';
module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define('Suggestion', {
    text: DataTypes.TEXT
  }, {});
  Suggestion.associate = function(models) {
    // associations can be defined here
  };
  return Suggestion;
};