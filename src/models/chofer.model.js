
import { DataTypes } from "sequelize";
import sequelize from '../db.js'
import User from "../models/user.model.js";

    const Chofer = sequelize.define('chofers', {
        choferid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        codchofer: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true
        },
        cantidadauto:{
            type: DataTypes.INTEGER,
            allowNull: false,
            trim: true, 
        },

        usuarioid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: User,
                key: 'usuarioid'
            }
        },


    

    }, {
        modelName: 'chofers',
        timestamps: true,
    });



    console.log('ok chofer');
    export default Chofer;

