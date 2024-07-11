
import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Ruta from "../models/ruta.model.js";

const Linea = sequelize.define('lineas', { 
    lineaid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    numerolinea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        trim: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    ruta: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    rutaid:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ruta,
            key: 'rutaid',
        }
    } 
    }, {
        // modelName: 'lineas',
        timestamps: true,
    });


Linea.belongsTo(Ruta, {foreignKey: 'rutaid', as : 'rutaData'});
// Ruta.hasMany(Linea, { foreignKey: 'rutaid', as : 'lineas'});

console.log("ok linea model ");
export default Linea;


