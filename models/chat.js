// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class chat extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   chat.init(
//     {
//       chatid: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       roomId: DataTypes.STRING,
//       userId: DataTypes.STRING,
//       userNickname: DataTypes.STRING,
//       createAt: DataTypes.TIME,
//       chat: DataTypes.STRING,
//       userImg: DataTypes.STRING,
//     },
//     {
//       timestamp: true,
//       sequelize,
//       modelName: "chat",
//     }
//   );
//   return chat;
// };