'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Directings', [
        {

          teamDirectors:'Opis',
          directorID: 1,
          movieID: 1,
          createdAt:new Date(),
          updatedAt:new Date(),
      },   {

        teamDirectors:'Opis',
        directorID: 2,
        movieID: 2,
        createdAt:new Date(),
        updatedAt:new Date(),
    },   {

      teamDirectors:'Opis',
      directorID: 3,
      movieID: 3,
      createdAt:new Date(),
      updatedAt:new Date(),
  },   {

    teamDirectors:'Opis', 
    directorID: 4,
    movieID: 4,
    createdAt:new Date(),
    updatedAt:new Date(),
},   {

  teamDirectors:'Opis',
  directorID: 5,
  movieID: 5,
  createdAt:new Date(),
  updatedAt:new Date(),
},
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Directings', null, {});
     
  }
};
