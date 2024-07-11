'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('persona', {
      personaid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        apellido_paterno: {
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
        },
        apellido_materno: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        edad: {
            type: Sequelize.INTEGER,
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
