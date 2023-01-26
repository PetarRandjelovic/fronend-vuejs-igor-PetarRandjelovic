'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Actors', [
        {
      
        firstName: 'Viggo',
        lastName: 'Mortensen', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
       
        firstName: 'Arnold ',
        lastName: 'Schwarzenegger ', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
       
        firstName: 'Harrison',
        lastName: 'Ford', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
      
        firstName: 'Tobey ',
        lastName: 'Maguire', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },   {
      
        firstName: 'Sylvester',
        lastName: 'Stallone', 
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Actors', null, {});
     
  }
};
