'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Movies', [
        
        {

          name:'Lord of the Rings',
          genreID: 1,
          createdAt:new Date(),
          updatedAt:new Date(),
      },    {

        name:'Terminator',
        genreID: 2,
        createdAt:new Date(),
        updatedAt:new Date(),
    },    {

      name:'Indiana Jones',
      genreID: 4,
      createdAt:new Date(),
      updatedAt:new Date(),
  },    {

    name:'Spider man',
    genreID: 2,
    createdAt:new Date(),
    updatedAt:new Date(),
},    {

  name:'Rocky',
  genreID: 3,
  createdAt:new Date(),
  updatedAt:new Date(),
},
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Movies', null, {});
     
  }
};
