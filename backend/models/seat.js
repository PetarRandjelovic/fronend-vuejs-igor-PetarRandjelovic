'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Reservation,Cinema}) {
      this.hasMany(Reservation,{as:'reservation'});
      this.belongsTo(Cinema,{foreignKey:'cinemaID',as:'cinema'});
    }
  }
  Seat.init({
    SeatNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};