'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  room.init({
    title: DataTypes.STRING,
    roomId: DataTypes.STRING,
    hostNickname: DataTypes.STRING,
    hostImg: DataTypes.STRING,
    max: DataTypes.NUMBER,
    createAt: DataTypes.TIME,
    hashTag: DataTypes.STRING,
    roomUserNum: DataTypes.NUMBER,
    roomUserId: DataTypes.STRING,
    roomUserNickName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'room',
  });
  return room;
};