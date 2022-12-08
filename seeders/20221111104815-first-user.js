'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Rhamon Guedes',
      username: 'rhamonguedes',
      email: 'rhamon.reis.guedes@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      birthday: new Date(1992, 3, 6),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};