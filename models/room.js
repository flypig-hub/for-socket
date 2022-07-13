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
  room.init(
    {
      roomid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      hostNickname: DataTypes.STRING,
      hostImg: DataTypes.STRING,
      max: DataTypes.INTEGER,
      createAt: DataTypes.TIME,
      hashTag: DataTypes.STRING,
      roomUserNum: DataTypes.INTEGER,
      roomUserId: DataTypes.STRING,
      roomUserNickName: DataTypes.STRING,
    },
    {
      timestamp: true,
      sequelize,
      modelName: "room",
    }
  );
  return room;
};