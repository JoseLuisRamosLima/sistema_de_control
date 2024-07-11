'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('grupo', {

        grupoid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        grupo: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
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


        vehiculoid: {  // Agregar columna para la clave foránea
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'vehiculo', // Nombre de la tabla a la que hace referencia
              key: 'vehiculoid'  // Nombre de la columna a la que hace referencia
          }
      },

    });

    await queryInterface.addConstraint('grupo', {
      fields: ['grupoid'],
      type: 'foreign key',
      name: 'grupo_grupoid_fk',
      references: {
          table: 'grupo',
          field: 'grupoid'
      },
      onDelete: 'cascade', // Puedes ajustar esto según tus necesidades (por ejemplo, 'cascade' para eliminar en cascada)
      onUpdate: 'cascade'
  });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('grupo', 'usuario_grupoid_fk');
    await queryInterface.dropTable('grupo')
  }
};

export default migration;
