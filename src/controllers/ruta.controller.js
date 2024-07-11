import Ruta from "../models/ruta.model.js";


export const getRutas = async (req, res) => {

    try {
        // const rutas = await Ruta.findAll({ user: req.User.usuarioid }).populate("user");
        // const rutas = await Ruta.findAll({ where: {user: req.User.usuarioid }});
        const rutas = await Ruta.findAll();
        console.log("obteniendo datos ", rutas)
        res.json(rutas);
    } catch (error) {
        console.error("error en obtener get ", error)
        return res.status(500).json({ error: error.message })
    }
};

export const createRuta = async (req, res) => {
    const { nombre, descripcion, date,
        latitud1, longitud1,
        latitud2, longitud2,
        latitud3, longitud3
    } = req.body;
    try {

        const newRuta = await Ruta.create({
            nombre,
            descripcion,
            date,
            latitud1,
            longitud1,
            latitud2,
            longitud2,
            latitud3,
            longitud3,
        });

        res.json({ newRuta });


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

export const getRuta = async (req, res) => {

    try {
        const ruta = await Ruta.findByPk(req.params.rutaid)
        if (!ruta) return res.status(404).json({ message: 'Ruta no encontrado' })
        res.json(ruta);
    } catch (error) {
        return res.status(404).json({ message: "ruta no encontrada" })
    }

};

export const updateRuta = async (req, res) => {

    try {
        const [updateRowsCount, updateRuta] = await Ruta.update(req.body, {
            where: { rutaid: req.params.rutaid },
            returning: true,

        })
        if (updateRowsCount === 0) {
            return res.status(404).json({ message: ' ruta no encontrado' });
        }
        res.json(updateRuta[0]);
    } catch (error) {
        return res.status(404).json({ message: "ruta no encontrada" })
    }


};

export const deleteRuta = async (req, res) => {
    try {
        // console.log("dato ", req.params.rutaid);

        const deletedRowCount = await Ruta.destroy(({
            where: { rutaid: req.params.rutaid },
        }));
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Ruta no encontrado' });
        }
        res.json({ message: 'Ruta eliminado exitosamente' });

    } catch (error) {
        return res.status(404).json({ message: "ruta no encontrada" })
    }
};



