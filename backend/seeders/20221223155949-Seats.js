'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Seats', [
        {
       seatNumber: 'Sediste',
       cinemaID:1,
       createdAt:new Date(),
        updatedAt:new Date(),
      },      {
        seatNumber: 'Sediste',
        cinemaID:2,
        createdAt:new Date(),
         updatedAt:new Date(),
       },      {
        seatNumber: 'Sediste',
        cinemaID:3,
        createdAt:new Date(),
         updatedAt:new Date(),
       },      {
        seatNumber: 'Sediste',
        cinemaID:4,
        createdAt:new Date(),
         updatedAt:new Date(),
       },      {
        seatNumber: 'Sediste',
        cinemaID:5,
        createdAt:new Date(),
         updatedAt:new Date(),
       },
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Seats', null, {});
     
  }
};
