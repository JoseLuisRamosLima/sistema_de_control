
import { DataTypes } from "sequelize";
import sequelize from '../db.js'
// import User from "../models/user.model.js";

    const Ruta = sequelize.define('rutas', {
        rutaid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            trim:true
        },
        latitud1: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        },
        longitud1: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        },
        latitud2: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        },
        longitud2: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        },
        latitud3: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        },
        longitud3: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            trim: true
        },
        date:{
            type: DataTypes.DATE,
            default: DataTypes.NOW,
        }
        // userarioid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references:{
        //         model: User,
        //         key: 'usuarioid',
        //     }
        // },
        

    }, {
        modelName: 'rutas',
        timestamps: true,
    });
    
    console.log('ok ruta model');
    export default Ruta;
