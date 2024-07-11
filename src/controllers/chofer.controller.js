import Chofer from "../models/chofer.model.js";
import Vehiculo from "../models/vehiculo.model.js";


export const getChofers = async (req, res) => {
    console.log("datos recibidos: ", Chofer)
    const chofers = await Chofer.findAll({
        User: req.User.usuarioid
    });
    res.json(chofers);

};

export const createChofer = async (req, res) => {
    const { codchofer, cantidadauto } = req.body;
    try {
        const usuarioid = req.User.usuarioid;
        // console.log("ddatos ", usuarioid)
        // console.log('usuario actu ', req.User);
        // console.log('usuarioid enviado ', usuarioid);
        const newChofer = await Chofer.create({
            codchofer,
            cantidadauto,
            usuarioid,
        });

        res.json({ newChofer });


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

export const getChofer = async (req, res) => {

    const chofer = await Chofer.findByPk(req.params.choferid)
    // console.log("envio chof ", chofer)
    if (!chofer) return res.status(404).json({ message: 'Chofer no encontrado' })
    res.json(chofer);

};

export const updateChofer = async (req, res) => {

    try {
        const [updateRowsCount, updateChofer] = await Chofer.update(req.body, {
            where: { choferid: req.params.choferid },
            returning: true,

        })
        if (updateRowsCount === 0) {
            return res.status(404).json({ message: ' Chofer no encontrado' });
        }
        res.json(updateChofer[0]);
    } catch (error) {
        console.error(error)

    }


};

export const deleteChofer = async (req, res) => {

    console.log("dato ", req.params.choferid)

    await Vehiculo.update({ choferid: null }, {
        where: { choferid: req.params.choferid }
    });

    const deletedRowCount = await Chofer.destroy(({
        where: { choferid: req.params.choferid },
    }));
    if (deletedRowCount === 0) {
        return res.status(404).json({ message: 'Chofer no encontrado' });
    }
    res.json({ message: 'Chofer eliminado exitosamente' });
};



