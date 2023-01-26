'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Broadcast,User,Seat}) {
     this.belongsTo(User,{foreignKey:'userID',as:'user',as:'user'});
     this.belongsTo(Seat,{foreignKey:'seatID',as:'seat',as:'seat'});
     this.belongsTo(Broadcast,{foreignKey:'broadcastID',as:'broadcast'});
    }
  }
  Reservation.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservation',

  });
  return Reservation;
};