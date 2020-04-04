'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Suggestions',
      'text',
      {
        type: Sequelize.TEXT,
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Suggestions',
      'text',
      {
        type: Sequelize.STRING,
      }
    )
  }
};
