
import { DataTypes } from "sequelize";
import sequelize from '../db.js'
import User from "../models/user.model.js";
import Rol from "../models/rol.model.js";

    const Usuario_rol = sequelize.define('usuario_rols', {
    

    }, {
    
    });

    Usuario_rol.associate =(models)=>{
        Usuario_rol.belongsTo(models.Rol);
        Usuario_rol.belongsTo(models.User);
    }


    console.log('ok rol usuario');
    export default Usuario_rol;
