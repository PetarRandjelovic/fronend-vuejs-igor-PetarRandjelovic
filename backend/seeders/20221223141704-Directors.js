'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Directors', [
        {
        
        firstName: 'Peter',
        lastName: 'Jackson', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
    
        firstName: 'James ',
        lastName: 'Cameron ', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
     
        firstName: 'Steven',
        lastName: 'Spielberg', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
     
        firstName: 'Sam ',
        lastName: 'Raimi', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
      
        firstName: 'John ',
        lastName: 'Avildsen', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Directors', null, {});
     
  }
};
