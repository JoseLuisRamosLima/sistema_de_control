'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuario', 'coordenadaid');
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuario', 'coordenadaid',{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'coordenada',
        key: 'coordenadaid'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  }
};

export default migration;
