import Sequelize from 'sequelize';
const sequelize = new Sequelize(
        'baseCrud',
        'postgres',
        'postgres', {
            host: 'localhost',
            dialect: 'postgres',
        });

    
try {
    // Intenta autenticar la conexión
    await sequelize.authenticate();
    console.log('Conexión exitosa......');
} catch (error) {
    // Captura y maneja errores de conexión
    console.error('Error en la conexión:', error.message);
}

export default sequelize


