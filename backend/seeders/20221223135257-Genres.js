'use strict';

const { date } = require('joi');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Genres', [
        {
      
        name: 'Fantasy',
        createdAt:new Date(),
        updatedAt:new Date(),
      },   
      {
      
        name: 'Action',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
      
        name: 'Drama',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
       
        name: 'Adventure',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    
      {
       
        name: 'Sci-fi',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Genres', null, {});
    
  }
};
