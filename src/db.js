// =======================++++=============================
//                 ABAJO CONFIGURACION BASE DATOS HOSTING "AFUERA"
// =======================++++=============================


import Sequelize from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: 'postgres',
    protocol: 'postgres',
    logging: true,
    dialectOptions:{
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
async function connectDatabase(){
    try {
        // Intenta autenticar la conexión
        await sequelize.authenticate();
        console.log('Conexión exitosa......');
    } catch (error) {
        // Captura y maneja errores de conexión
        console.error('Error en la conexión:', error.message);
    }
}
connectDatabase();

export default sequelize

// =======================++++=============================
//                 ABAJO CONFIGURACION BASE DATOS LOCAL 
// =======================++++=============================
// import Sequelize from 'sequelize';
// const sequelize = new Sequelize(
//         'baseCrud',
//         'postgres',
//         'postgres', {
//             host: 'localhost',
//             dialect: 'postgres',
//         });

    
// try {
//     // Intenta autenticar la conexión
//     await sequelize.authenticate();
//     console.log('Conexión exitosa......');
// } catch (error) {
//     // Captura y maneja errores de conexión
//     console.error('Error en la conexión:', error.message);
// }

// export default sequelize


