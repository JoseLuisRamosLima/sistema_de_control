

import Vehiculo from "../models/vehiculo.model.js";
// import Gps from "../models/gps.model.js"; 
import Trabajo from "../models/trabajar.model.js";


export const getVehiculos = async (req, res) => {
    const vehiculos = await Vehiculo.findAll(
        // Gps: req.Gps.gpsid,
        // Chofer: req.Chofer.choferid,
        // Grupo: req.Grupo.grupoid,
    );
    res.json(vehiculos);

};

export const createVehiculo = async (req, res) => {
    const { cantidadpasajero, numplaca, modelo, color, marca, choferid, grupoid } = req.body;
    try {

        const newVehiculo = await Vehiculo.create({

            cantidadpasajero,
            numplaca,
            modelo,
            color,
            marca,
            choferid,
            grupoid,

        });
        // const vehiculoSave = await newVehiculo.save();
        res.json({ newVehiculo });


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

export const getVehiculo = async (req, res) => {

    const vehiculo = await Vehiculo.findByPk(req.params.vehiculoid)
    // console.log("enviando vehiculo : ", vehiculo);
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo no encontrado de id' })
    res.json(vehiculo);

};

export const updateVehiculo = async (req, res) => {

    const [updateRowsCount, updateVehiculo] = await Vehiculo.update(req.body, {
        where: { vehiculoid: req.params.vehiculoid },
        returning: true,
    })

    if (updateRowsCount === 0) {
        return res.status(404).json({ mmesague: 'no se encontro vehiculo.' });
    }
    res.json(updateVehiculo[0]);


};

export const deleteVehiculo = async (req, res) => {
    const { vehiculoid } = req.params;

    try {
        // Actualizar todos los registros en `trabajos` que referencien este `vehiculoid` a null
        await Trabajo.update(
            { vehiculoid: null },
            { where: { vehiculoid: vehiculoid } }
        );

        // Ahora eliminar el vehiculo
        const deletedRowCount = await Vehiculo.destroy({
            where: { vehiculoid: vehiculoid },
        });

        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Vehiculo no encontrado' });
        }

        res.json({ message: 'Vehiculo eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el vehiculo' });
    }

    // console.log("dato ", req.params.vehiculoid)

    // const deletedRowCount = await Vehiculo.destroy(({
    //     where: { vehiculoid: req.params.vehiculoid },
    // }));
    // if(deletedRowCount === 0 ){
    //     return res.status(404).json({ message: 'no se encontro vehiculo. '});
    // }
    // res.json({ message: ' el vehiculo seleccionado fue eliminado exitosamente. '});

};



