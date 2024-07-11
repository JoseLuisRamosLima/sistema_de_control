'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.addColumn('gps','createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
    await queryInterface.addColumn('gps', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });


  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('gps', 'createdAt');
    await queryInterface.removeColumn('gps', 'updatedAt');

  }
};

export default migration;
