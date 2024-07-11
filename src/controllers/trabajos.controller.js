
import Trabajo from "../models/trabajar.model.js";
import Linea from "../models/linea.model.js";
import Grupo from "../models/grupo.model.js";
import Vehiculo from "../models/vehiculo.model.js";

export const getTrabajoLinea = async (req, res) => {

    try {
        console.log("capturando datos linea");
        const trabajolinea = await Trabajo.findAll({
            include: [
                {
                    model: Vehiculo,
                    include: {
                        model: Grupo,   
                        include: {
                            model: Linea,
                            attributes: ['numerolinea']
                        }
                    }
                }
            ]
        })
        res.json(trabajolinea);
    } catch (error) {
        console.error("error al obtener los datos linea trabajo ", error);
        res.status(500).json({ message: "Error al obtener los datos" });
    }
};

export const getTrabajo = async (req, res) => {
    const trabajo = await Trabajo.findByPk(req.params.trabajoid);
    if (!trabajo) {
        return res.status(404).json({ messague: 'trabajo no encontrado' });
    }
    res.json(trabajo);

}
export const createTrabajo = async (req, res) => {
    const { linea, grupo, vehiculoid } = req.body;
    try {
        console.log("ok datos recibidos TRABAJO ")
        const newTrabajo = await Trabajo.create({
            linea,
            grupo,
            vehiculoid
        });
        // console.log("datos TRABAJO, ", newTrabajo)
        res.json({ newTrabajo });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map((e) => ({
                field: e.path,
                message: e.message
            }));
            res.status(400).json({ error: 'Error de validación', details: validationErrors });
        } else {
            console.error(error);
            res.status(500).send('otros errores');
        }
    }

}


export const deleteTrabajo = async (req, res) => {
    console.log("dato ", req.params.trabajoid)
    const deletedRowCount = await Trabajo.destroy(({
        where: { trabajoid: req.params.trabajoid },
    }));
    if (deletedRowCount === 0) {
        return res.status(404).json({ message: 'Trabajo no encontrado' });
    }
    res.json({ message: 'trabajo eliminado exitosamente' });
};



