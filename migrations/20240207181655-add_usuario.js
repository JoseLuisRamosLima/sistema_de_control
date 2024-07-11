'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuario','createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
    await queryInterface.addColumn('usuario', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });


  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuario', 'createdAt');
    await queryInterface.removeColumn('usuario', 'updatedAt');

  }
};

export default migration;
