'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('gps', {
      gpsid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    punto1: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim: true
    },
    punto2: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim:true
    },
    punto3: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        trim: true
    },
    
    });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('gps')
  }
};

export default migration;

