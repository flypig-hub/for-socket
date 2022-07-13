// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("rooms", {
//       roomid: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       title: {
//         type: Sequelize.STRING,
//       },
//       hostNickname: {
//         type: Sequelize.STRING,
//       },
//       hostImg: {
//         type: Sequelize.STRING,
//       },
//       max: {
//         type: Sequelize.INTEGER,
//       },
//       createAt: {
//         type: Sequelize.TIME,
//       },
//       hashTag: {
//         type: Sequelize.STRING,
//       },
//       roomUserNum: {
//         type: Sequelize.INTEGER,
//       },
//       roomUserId: {
//         type: Sequelize.STRING,
//       },
//       roomUserNickName: {
//         type: Sequelize.STRING,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('rooms');
//   }
// };