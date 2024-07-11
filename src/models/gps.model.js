
import { DataTypes } from "sequelize";
import sequelize from '../db.js'
import Vehiculo from "../models/vehiculo.model.js";
import Grupo from "./grupo.model.js";


const Gps = sequelize.define('gps', {
    gpsid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    punto1: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        trim: true
    },
    punto2: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        trim: true
    },
    punto3: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        trim: true
    },
    lati1: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        trim: true
    },
    long1: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        trim: true
    },
    lati2: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        trim: true
    },
    long2: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        trim: true
    },
    lati3: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        trim: true
    },
    long3: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        trim: true
    },
    // vehiculoid: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
        
    // }

}, {
    modelName: 'gps',
    timestamps: true,
});


console.log('ok gps model');
export default Gps;
