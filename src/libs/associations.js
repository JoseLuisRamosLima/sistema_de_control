import Gps from '../models/gps.model.js';
import Vehiculo from '../models/vehiculo.model.js';

// Definir asociaciones después de importar todos los modelos
Vehiculo.hasMany(Gps, { foreignKey: 'vehiculoid' });
Gps.belongsTo(Vehiculo, { foreignKey: 'vehiculoid' });

console.log('Asociaciones definidas correctamente');
