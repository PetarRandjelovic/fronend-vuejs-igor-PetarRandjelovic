'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cast,Genre,Broadcast,Directing}) {
      this.hasMany(Cast,{as:'cast'});
      this.belongsTo(Genre,{foreignKey:'genreID',as:'genre'});
      this.hasMany(Directing,{as:'directing'});
      this.hasMany(Broadcast,{as:'broadcast'});
      //
    }
  }
  Movie.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};