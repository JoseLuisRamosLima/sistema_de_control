'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('vehiculo', {

        vehiculoid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        cantidadpasajero: {
            type: Sequelize.INTEGER,
            allowNull: false,
            trim: true
        },
        numplaca: {
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
        },
        modelo: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        marca: {
            type: Sequelize.STRING,
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

        gpsid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'gps', // Nombre de la tabla a la que hace referencia
              key: 'gpsid'  // Nombre de la columna a la que hace referencia
          }
        },
        choferid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'chofer', // Nombre de la tabla a la que hace referencia
              key: 'choferid'  // Nombre de la columna a la que hace referencia
          }
        },

    });

    await queryInterface.addConstraint('vehiculo', {
      fields: ['gpsid'],
      type: 'foreign key',
      name: 'usuario_gpsid_fk',
      references: {
          table: 'gps',
          field: 'gpsid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('vehiculo', {
      fields: ['choferid'],
      type: 'foreign key',
      name: 'usuario_choferid_fk',
      references: {
          table: 'chofer',
          field: 'choferid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
    });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('usuario', 'usuario_gpsid_fk');
    await queryInterface.removeConstraint('usuario', 'usuario_choferid_fk');
    await queryInterface.dropTable('usuario')
  }
};

export default migration;
