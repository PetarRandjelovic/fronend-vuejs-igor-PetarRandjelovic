'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkInsert('Users', [{
       name: 'branko',
      
        email:'branko@branko.com',
        admin:false,
        moderator:true,
        createdAt:new Date(),
        updatedAt:new Date(),
        password: bcrypt.hashSync('branko',10)
      
      },
      {
        name: 'mirko',
     
        email:'mirko@mirko.com',
        admin:false,
        moderator:true,
        createdAt:new Date(),
        updatedAt:new Date(),
        password: bcrypt.hashSync('mirko',10)

      },
      {
        name: 'marko',
    
        email:'marko@marko.com',
        admin:true,
        moderator:false,
        createdAt:new Date(),
        updatedAt:new Date(),
        password: bcrypt.hashSync('marko',10)

      },
      {
        name: 'mira',
      
        email:'mira@mira.com',
        admin:false,
        moderator:false,
        createdAt:new Date(),
        updatedAt:new Date(),
        password: bcrypt.hashSync('mira',10)

      }
      ,
      {
        name: 'milos',
      
        email:'milos@milos.com',
        admin:false,
        moderator:false,
        createdAt:new Date(),
        updatedAt:new Date(),
        password: bcrypt.hashSync('milos',10)

      }
    
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
