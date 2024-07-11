'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.addColumn('coordenada','createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });
    await queryInterface.addColumn('coordenada', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('NOW()')
    });


  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('coordenada', 'createdAt');
    await queryInterface.removeColumn('coordenada', 'updatedAt');

  }
};

export default migration;
