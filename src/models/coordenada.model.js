
import { DataTypes } from "sequelize";
import sequelize from '../db.js'

    const Coordenada = sequelize.define('coordenadas', {
        coordenadaid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true
        },
        latitud: {
            type: DataTypes.DOUBLE,
            allowNull: false,   
            trim:true
        },
        longitud: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        }
    }, {
        modelName: 'coordenadas',
        timestamps: true,
    });

    console.log('ok coordenada model ');
    export default Coordenada;

