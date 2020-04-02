'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Requirements',
      'itemType'
    ).then(function () {
      return queryInterface.addColumn(
        'Requirements',
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
      'Requirements',
      'PPETypeId'
    ).then(function () {
      return queryInterface.addColumn(
        'Requirements',
        'itemType',
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      )
    })
  }
};
