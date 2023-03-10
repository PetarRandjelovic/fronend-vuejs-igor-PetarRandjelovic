'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Actor,Movie}) {
    this.belongsTo(Actor,{foreignKey:'actorID',as:'actor'});
    this.belongsTo(Movie,{foreignKey:'movieID',as:'movie'});
    }
  }
  Cast.init({

  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};