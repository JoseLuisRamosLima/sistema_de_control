'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {

        usuarioid: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        cargo: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        usuario: {
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },

        personaid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'persona', // Nombre de la tabla a la que hace referencia
              key: 'personaid'  // Nombre de la columna a la que hace referencia
          }
      },

    });

    await queryInterface.addConstraint('usuario', {
      fields: ['personaid'],
      type: 'foreign key',
      name: 'usuario_personaid_fk',
      references: {
          table: 'persona',
          field: 'personaid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
  });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('usuario', 'usuario_personaid_fk');
    await queryInterface.dropTable('usuario')
  }
};

export default migration;
