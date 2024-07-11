import { model } from "mongoose";
import Gps from "../models/gps.model.js";
import Ruta from "../models/ruta.model.js";
import { where } from "sequelize";
// import Vehiculo from "../models/vehiculo.model.js";


export const getGpss = async (req, res) => {
try {
        console.log("ok linea")
        console.log(" datos de ", Gps);
        const gpss = await Gps.findAll();
        // console.log("ok linea datos recibidos ", lineas);
        res.json(gpss);
    
} catch (error) {
    console.error("Error DE GPS revisando ",error)
}};

// gps con id 
export const getGps = async (req, res) => {

    const gps = await Gps.findByPk(req.params.gpsid)
    if (!gps) return res.status(404).json({ message: 'Gps no encontrado' })
    res.json(gps);
};

export const capturaGPS = async (req, res) => {
    const { rutaid } = req.params;
    const { vehiculoid } = req.body; 

    console.log(`buscando ruta id : ${rutaid}`);
    try {
        const ruta = await Ruta.findByPk(rutaid);
        if (!ruta) {
            console.log(`ruta con id ${rutaid} no encontrada`);
            return res.status(404).json({ message: 'Ruta no encontrada' });
        }

        const { latitud1, longitud1, latitud2, longitud2, latitud3, longitud3 } = ruta;
        console.log(`datos de rutas contrados: ${JSON.stringify(ruta)}`);
        if (latitud1 === null || longitud1 === null || latitud2 === null || longitud2 === null || latitud3 === null || longitud3 === null) {
            console.log('Datos de coordenadas incompletos en la ruta');
            return res.status(400).json({ message: 'Datos de coordenadas incompletos en la ruta' });
        }

        const newGps = await Gps.create({
            lati1: latitud1,
            long1: longitud1,
            lati2: latitud2,
            long2: longitud2,
            lati3: latitud3,
            long3: longitud3,
            punto1: false,
            punto2: false,
            punto3: false,
            vehiculoid: vehiculoid
        });
        console.log(`Datos GPS capturados y almacenados: ${JSON.stringify(newGps)}`);
        res.json({ newGps });

    } catch (error) {
        console.error("error al capturar y almacenar datos GPS ", error);
        res.status(500).json({ error: 'Error interno del servidor ' });
    }


};

export const eliminartodoGps = async(req, res)=> {
    try {
        await Gps.destroy({ where: {} });
        res.status(200).send("Todos los datos an sido eliminados")
    } catch (error) {
        console.error("Error de eliminacion ", error)
        res.status(500).send("Error al eliminar los gps");
    }
};









export const createGps = async (req, res) => {
    const { punto1, punto2, punto3 } = req.body;
    try {

        const newGps = await Gps.create({
            punto1,
            punto2,
            punto3,
        });
        // const gpsSave = await newGps.save();
        res.json({ newGps });


    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((e) => ({
                field: e.path,
                message: e.message
            }));
            res.status(400).json({ error: 'Error de validación', details: validationErrors });
        } else {
            // Otros errores
            console.error(error);
            res.status(500).send('otros errores');
        }
    }

};