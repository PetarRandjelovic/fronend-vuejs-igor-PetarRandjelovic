'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Broadcasts', [
        {
        date: new Date(),
        dimensionID: 1,
        cinemaID: 1,
        movieID: 1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },      {
        date: new Date(),
        dimensionID: 2,
        cinemaID: 2,
        movieID: 2,
        createdAt:new Date(),
        updatedAt:new Date(),
      },  {
        date: new Date(),
        dimensionID: 3,
        cinemaID: 3,
        movieID: 3,
        createdAt:new Date(),
        updatedAt:new Date(),
      },      {
        date: new Date(),
        dimensionID: 4,
        cinemaID: 4,
        movieID: 4,
        createdAt:new Date(),
        updatedAt:new Date(),
      },      {
        date: new Date(),
        dimensionID: 5,
        cinemaID: 5,
        movieID: 5,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Broadcasts', null, {});
     
  }
};
