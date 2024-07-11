'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('ruta', {

        rutaid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
        },
        latitud1: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim: true
        },
        longitud1: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim: true
        },
        latitud2: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim: true
        },
        longitud2: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim: true
        },
        latitud3: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            trim: true
        },
        longitud3: {
            type: Sequelize.DOUBLE,
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


        usuarioid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'usuario', // Nombre de la tabla a la que hace referencia
              key: 'usuarioid'  // Nombre de la columna a la que hace referencia
          }
        },

        grupoid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'grupo', // Nombre de la tabla a la que hace referencia
              key: 'grupoid'  // Nombre de la columna a la que hace referencia
          }
        },

    });

    await queryInterface.addConstraint('ruta', {
      fields: ['usuarioid'],
      type: 'foreign key',
      name: 'ruta_usuarioid_fk',
      references: {
          table: 'usuario',
          field: 'usuarioid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('ruta', {
      fields: ['grupoid'],
      type: 'foreign key',
      name: 'ruta_grupoid_fk',
      references: {
          table: 'grupo',
          field: 'grupoid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
    });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ruta', 'ruta_usuarioid_fk');
    await queryInterface.removeConstraint('ruta', 'ruta_grupoid_fk');
    await queryInterface.dropTable('ruta')
  }
};

export default migration;
