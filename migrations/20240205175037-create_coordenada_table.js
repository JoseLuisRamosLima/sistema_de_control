'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('coordenada', {
      coordenadaid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        latitud: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim:true
        },
        longitud: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim: true
        },
      
    
    });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('coordenada')
  }
};

export default migration;

