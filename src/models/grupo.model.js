
import { DataTypes } from "sequelize";
import sequelize from '../db.js'
import Linea from "../models/linea.model.js";
// import Vehiculo from "./vehiculo.model.js";

const Grupo = sequelize.define('grupos', {
    grupoid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    grupo: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    lunes: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    martes: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    miercoles: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    jueves: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    viernes: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    sabado: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    domingo: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    lineaid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Linea,
            key: 'lineaid',
        }
    },



}, {

    timestamps: true,
});
Grupo.belongsTo(Linea, { foreignKey: 'lineaid'});
// Linea.hasMany(Grupo, { foreingKey: 'lineaid'});

console.log('ok grupo model');
export default Grupo;
