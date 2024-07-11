// 'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const migration = {
  up: async(queryInterface, Sequelize)=> {
    await queryInterface.createTable('rol', {
      rolid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      modificar: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim: true
      },
      baja: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim: true
      },
      crear: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim: true
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
    });
  },
  
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('rol')
  }
};

export default migration;

