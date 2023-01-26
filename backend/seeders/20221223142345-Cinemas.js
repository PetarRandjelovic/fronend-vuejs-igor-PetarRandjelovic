'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Cinemas', [
         
        {
         
          name: 'Cineplexx Usce',
          createdAt:new Date(),
          updatedAt:new Date(),
        },   
        {
        
          name: 'Bioskop Fontana',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
      
          name: 'Cineplexx Delta City',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
         
          name: 'Dom kulture',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
      
        {
       
          name: 'Kombank dvorana',
          createdAt:new Date(),
          updatedAt:new Date(),
        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Cinemas', null, {});
     
  }
};
