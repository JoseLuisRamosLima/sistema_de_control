
import { DataTypes} from "sequelize";
import sequelize from '../db.js'
import Grupo from "../models/grupo.model.js";
import Gps from "../models/gps.model.js";
import Chofer from "../models/chofer.model.js";

const Vehiculo = sequelize.define('vehiculos', {
    vehiculoid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidadpasajero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        trim: true
    },
    numplaca: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    choferid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Chofer,
            key: 'choferid',

        }
    },
    grupoid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Grupo,
            key: 'grupoid',
        }
    },
    gpsid:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Gps,
            key: 'gpsid',
        }
    }

}, {
    modelName: 'vehiculos',
    timestamps: true,
});

Vehiculo.belongsTo(Grupo, { foreignKey: 'grupoid' });

console.log('ok vehiculo model');
export default Vehiculo;


//     // definicion de llaves foraneas 
//     Vehiculo.associate = (models)=> {
//         Vehiculo.belongsTo(models.Gps,{
//             foreignKey: 'gpsid',
//             as:'gps'
//         });
//     Vehiculo.associate = (models)=> {
//         Vehiculo.belongsTo(models.Chofers,{
//             foreignKey: 'choferid',
//             as:'chofer'
//         });
//     };
//     Vehiculo.associate = (models) =>{
//         Vehiculo.belongsTo(models.Grupos, {
//             foreignKey: 'grupoid',
//             as: 'grupo'
//         })
//     }
// };
