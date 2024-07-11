
import { DataTypes } from "sequelize";
import sequelize from '../db.js'

    const User = sequelize.define('usuarios', {
        usuarioid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            trim:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true
        },

        // personaid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: Persona,
        //         key: 'personaid'
        //     }
        // },
        // coordenadaid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: Coordenada,
        //         key: 'coordenadaid'
        //     }
        // },


    }, {
        modelName: 'usuarios',
        timestamps: true,
    });

    // User.associate =(models)=>{
    //     User.hasMany(models.roluser.model);
    
    // }


    console.log('ok usermodel user');
    export default User;

    // ***********************************************************
            // en caso de utilizacion de manejo de errores abajo 
    // ***********************************************************
    // 
    // console.log('ok usermodel rol')
    // export default Rol;



    // MANEJANDO ERRORES PARA CONEXION
    // ESTATUS..... OK 
    // try {
    //     // Intenta autenticar la conexión
    //     await sequelize.authenticate();
    //     console.log('Conexión exitosa a la base de datos "base2"');
    
    //     // Muestra el contenido de la tabla
    //     const users = await User.findAll();
    //     console.log('Contenido de la tabla "persona":', users);
    // } catch (error) {
    //     // Captura y maneja errores de conexión y consulta
    //     console.error('Error:', error.message);
    // } finally {
    //     try {
    //         // Cierra la conexión
    //         await sequelize.close();
    //         console.log('Conexión cerrada');
    //     } catch (error) {
    //         console.error('Error al cerrar la conexión:', error.message);
    //     }
    // }

// diner ****************************************************************************************
//     jose123
//     S1st3m4s
        // jluis90
        // joe135*


        // temu 
        // jlouis /// S1st3m4s