'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Availabilities',
      'itemType'
    ).then(function () {
      return queryInterface.addColumn(
        'Availabilities',
        'PPETypeId',
        {
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          allowNull: true,
          references: {
            model: 'PPETypes',
            key: 'id'
          }
        }
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Availabilities',
      'PPETypeId'
    ).then(function () {
      return queryInterface.addColumn(
        'Availabilities',
        'itemType',
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      )
    })
  }
};
