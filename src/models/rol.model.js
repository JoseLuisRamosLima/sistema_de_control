
import { DataTypes } from "sequelize";
import sequelize from '../db.js'

    const Rol = sequelize.define('rols', {
        rolid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        modificar: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            trim: true
        },
        baja: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            trim:true
        },
        crear: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            trim: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            trim: true
        },


    }, {
        modelName: 'rols',
        timestamps: true,
    });

    Rol.associate =(models)=>{
        Rol.hasMany(models.roluser,{foreignKey: 'rolid'});
    
    }



    console.log('ok rol model');
    export default Rol;


    