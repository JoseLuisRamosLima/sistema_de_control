'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.addColumn('chofer','createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
    await queryInterface.addColumn('chofer', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });


  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('chofer', 'createdAt');
    await queryInterface.removeColumn('chofer', 'updatedAt');

  }
};

export default migration;
