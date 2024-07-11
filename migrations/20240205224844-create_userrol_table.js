'use strict';

import DataType from "sequelize";

/** @type {import('sequelize-cli').Migration} */
const migration ={
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('userrol', {
      usuarioid: {  // Agregar columna para la clave foránea
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario', // Nombre de la tabla a la que hace referencia
            key: 'usuarioid'  // Nombre de la columna a la que hace referencia
        }
      },
      rolid: {  // Agregar columna para la clave foránea
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'rol', // Nombre de la tabla a la que hace referencia
            key: 'rolid'  // Nombre de la columna a la que hace referencia
        }
      },
    });

    await queryInterface.addConstraint('userrol', {
      fields: ['usuarioid'],
      type: 'foreign key',
      name: 'usuario_usuarioid_fk',
      references: {
          table: 'usuario',
          field: 'usuarioid'
      },
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('userrol', {
      fields: ['rolid'],
      type: 'foreign key',
      name: 'usuario_rolid_fk',
      references: {
          table: 'rol',
          field: 'rolid'
      },
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    });
  
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('userrol', 'usuario_usuarioid_fk');
    await queryInterface.removeConstraint('userrol', 'usuario_rolid_fk');
    await queryInterface.dropTable('userrol')
  }
};

export default migration;
