'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('chofer', {

      choferid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    codchofer: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
    },

        usuarioid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'usuario', // Nombre de la tabla a la que hace referencia
              key: 'usuarioid'  // Nombre de la columna a la que hace referencia
          }
      },

    });

    await queryInterface.addConstraint('chofer', {
      fields: ['usuarioid'],
      type: 'foreign key',
      name: 'usuario_usuarioid_fk',
      references: {
          table: 'usuario',
          field: 'usuarioid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
  });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('usuario', 'usuario_usuarioid_fk');
    await queryInterface.dropTable('chofer')
  }
};

export default migration;
