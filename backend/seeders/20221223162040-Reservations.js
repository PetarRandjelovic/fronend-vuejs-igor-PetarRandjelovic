'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Reservations', [
        
        {
        name: 'Opis',
        broadcastID:1,
        seatID:1,
        userID:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },  {
        name: 'Opis',
        broadcastID:2,
        seatID:2,
        userID:2,
        createdAt:new Date(),
        updatedAt:new Date(),
      },  {
        name: 'Opis',
        broadcastID:3,
        seatID:3,
        userID:3,
        createdAt:new Date(),
        updatedAt:new Date(),
      },  {
        name: 'Opis',
        broadcastID:4,
        seatID:4,
        userID:4,
        createdAt:new Date(),
        updatedAt:new Date(),
      },  {
        name: 'Opis',
        broadcastID:5,
        seatID:5,
        userID:5,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Reservations', null, {});
     
  }
};
