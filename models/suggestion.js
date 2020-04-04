'use strict';
module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define('Suggestion', {
    text: DataTypes.STRING
  }, {});
  Suggestion.associate = function(models) {
    // associations can be defined here
  };
  return Suggestion;
};