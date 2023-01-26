'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize)
  
  {
      await queryInterface.bulkInsert('Dimensions', [
        
        {
       
          name: '3d',
          createdAt:new Date(),
          updatedAt:new Date(),
        },   
        {
          
          name: '2d',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
       
          name: '4d',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
      
          name: '1d',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
      
        {
       
          name: 'realD3d',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Dimensions', null, {});
     
  }
};
