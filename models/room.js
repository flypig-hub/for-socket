// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class room extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   room.init(
//     {
//       roomid: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       title: DataTypes.STRING,
//       hostNickname: DataTypes.STRING,
//       hostImg: DataTypes.STRING,
//       max: DataTypes.INTEGER,
//       createAt: DataTypes.TIME,
//       hashTag: DataTypes.STRING,
//       roomUserNum: DataTypes.INTEGER,
//       roomUserId: DataTypes.STRING,
//       roomUserNickName: DataTypes.STRING,
//     },
//     {
//       timestamp: true,
//       sequelize,
//       modelName: "room",
//     }
//   );
//   return room;
// };

const Sequelize = require("sequelize");

module.exports = class Room extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        roomId: {
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.BIGINT,
        },
        roomTittle: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        private: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        roomPassword: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        purpose: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        round: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        studyTime: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        recessTime: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        openAt: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        isStarted: {
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        currentRound: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Room",
        tableName: "Rooms",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Room.hasMany(db.PersonInRoom, {
      as: "peopleInRoom",
      foreignKey: "roomId",
      sourceKey: "roomId",
      onDelete: "CASCADE",
    });
  }
};