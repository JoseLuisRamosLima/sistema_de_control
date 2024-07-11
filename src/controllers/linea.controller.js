
import Linea from "../models/linea.model.js";
import Ruta from "../models/ruta.model.js";

export const getLineasConCoordenadas = async (req, res) => {
    try {
        console.log("Iniciando obtención de líneas con coordenadas...");

        const lineas = await Linea.findAll({
            include: {
                model: Ruta,
                as: 'rutaData',
                attributes: ['rutaid','latitud1', 'longitud1', 'latitud2', 'longitud2', 'latitud3', 'longitud3']
            }
        });

        const lineasConCoordenadas = lineas.map(linea => {
            const { lineaid, numerolinea, color, rutaData } = linea;
            const { rutaid, latitud1, longitud1, latitud2, longitud2, latitud3, longitud3 } = rutaData;
            return {
                lineaid,
                numerolinea,
                color,
                coordenadas: {
                    latitud1,
                    longitud1,
                    latitud2,
                    longitud2,
                    latitud3,
                    longitud3
                },
                rutaid
            };
        });

        console.log("Líneas obtenidas exitosamente:", lineasConCoordenadas);
        res.json(lineasConCoordenadas);
    } catch (error) {
        console.error("Error al obtener las líneas:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


export const getLineas = async (req, res) => {
    console.log("ok linea")
    console.log(" datos de ", Linea);
    const lineas = await Linea.findAll();
    // console.log("ok linea datos recibidos ", lineas);
    res.json(lineas);

};

export const getLinea = async (req, res) => {
    const linea = await Linea.findByPk(req.params.lineaid);
    if (!linea) {
        return res.status(404).json({ messague: 'linea no encontrado' });
    }
    res.json(linea);

}

export const createLinea = async (req, res) => {
    const { numerolinea, color, ruta, rutaid } = req.body;
    try {
        const newLinea = await Linea.create({
            numerolinea,
            color,
            ruta,
            rutaid,

        });

        res.json({ newLinea });

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



export const updateLinea = async (req, res) => {

    const [updateRowsCount, updateLinea] = await Linea.update(req.body, {
        where: { lineaid: req.params.lineaid },
        returning: true,
    })
    if (updateRowsCount === 0) {
        return res.status(404).json({ message: ' linea no encontrado' });
    }
    res.json(updateLinea[0]);


};

export const deleteLinea = async (req, res) => {

    console.log("dato ", req.params.lineaid)

    const deletedRowCount = await Linea.destroy(({
        where: { lineaid: req.params.lineaid },
    }));
    if (deletedRowCount === 0) {
        return res.status(404).json({ message: 'Linea no encontrado' });
    }
    res.json({ message: 'linea eliminado exitosamente' });
};

export const getRutaByLinea = async (req, res) => {
    try {
        const linea = await Linea.findByPk(req.params.lineaid, {
            include: [{
                model: Ruta,
                attributes: [
                    'latitud1', 'longitud1','latitud2', 'longitud2', 'latitud3', 'longitud3']
            }]
        });

        if (!linea) {
            return res.status(404).json({ message: 'linea no encontrado' });
        }

        const ruta = linea.ruta;
        if (!ruta) {
            return res.status(404).json({ message: 'Ruta no encontrada' });
        }

        res.json({ latitud: ruta.latitud, longitud: ruta.longitud });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error del servidor');
    }
};






