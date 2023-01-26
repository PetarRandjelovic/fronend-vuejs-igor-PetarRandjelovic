'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Casts', [
        
        {
        
        actorID: '1',
        movieID: '1',
        createdAt:new Date(),
        updatedAt:new Date(),
     
      },   {
        
        actorID: '2',
        movieID: '2',
        createdAt:new Date(),
        updatedAt:new Date(),
     
      },   {
        
        actorID: '3',
        movieID: '3',
        createdAt:new Date(),
        updatedAt:new Date(),
     
      },   {
        
        actorID: '4',
        movieID: '4',
        createdAt:new Date(),
        updatedAt:new Date(),
     
      },   {
        
        actorID: '5',
        movieID: '5',
        createdAt:new Date(),
        updatedAt:new Date(),
     
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Casts', null, {});
     
  }
};
