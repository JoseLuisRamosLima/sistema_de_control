import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Vehiculo from "../models/vehiculo.model.js";

const Trabajo = sequelize.define('trabajos', {
    trabajoid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    linea: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    grupo: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    vehiculoid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Vehiculo,
            key: 'vehiculoid',
        },
        onDelete: 'CASCADE',
    }
}, {
    timestamps: true,
});

Trabajo.belongsTo(Vehiculo, { foreignKey: 'vehiculoid' });

console.log("ok trabajos model");
export default Trabajo;
