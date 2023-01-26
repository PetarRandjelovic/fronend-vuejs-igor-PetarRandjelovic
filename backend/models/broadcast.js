'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Broadcast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie,Reservation,Cinema,Dimension}) {
      this.belongsTo(Movie,{foreignKey:'movieID',as:'movie'});
     this.hasMany(Reservation,{as:'reservation'});
      this.belongsTo(Cinema,{foreignKey:'cinemaID',as:'cinema'});
      this.belongsTo(Dimension,{foreignKey:'dimensionID',as:'dimension'});
    }
  }
  Broadcast.init({
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Broadcast',
  });
  return Broadcast;
};