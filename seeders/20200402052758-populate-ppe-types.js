'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('PPETypes', [{
      name: 'Mask',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Glove",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Face Shield",
      createdAt: new Date(),
      updatedAt: new Date()
    },]);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PPETypes', null, {});
  }
};
