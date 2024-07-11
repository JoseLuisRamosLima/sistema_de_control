import app from "./app.js";
import sequelize from "./db.js";

// import "./models/trabajar.model.js";
// import "./models/vehiculo.model.js";
// import "./models/grupo.model.js";
// import "./models/linea.model.js";

// const startServer = async ()=>{
//     try {
//         await sequelize.sync({alter : true });
//         console.log('base datos SINCRONIZADA');        
//         app.listen(3000);

//     } catch (error) {
//         console.error('Error en SINCRONIZACION ', error);
//     }
// }
// startServer();

app.listen(3000)
console.log('Servidor en puerto', 3000)





// import './models/gps.model.js';
// import './models/vehiculo.model.js';
// import './models/grupo.model.js';
// import './models/chofer.model.js';

// import './libs/associations.js';

// sequelize.sync({ force: false }).then(() => {
//     console.log('Database & tables created!');
//     // Inicia el servidor después de sincronizar la base de datos
//     app.listen(3000, () => {
//         console.log('Servidor en puerto', 3000);
//     });
// }).catch(error => {
//     console.error("Error al sincronizar la base datos ", error);
// })


// app.listen(3000)
// console.log('Servidor en puerto', 3000)





// import app from "./app.js";
// import sequelize from "./db.js";