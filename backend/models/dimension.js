'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimension extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Broadcast}) {
      this.hasMany(Broadcast,{foreignKey:'dimensionID',as:'broadcast'});
    }
  }
  Dimension.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dimension',
  });
  return Dimension;
};