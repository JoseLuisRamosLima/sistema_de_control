'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('coordenada');
  }
};

export default migration;

