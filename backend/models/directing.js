'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Director,Movie}) {
      this.belongsTo(Director,{foreignKey:'directorID',as:'director'});
      this.belongsTo(Movie,{foreignKey:'movieID',as:'movie'})
    }
  }
  Directing.init({
    teamDirectors: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Directing',
  });
  return Directing;
};