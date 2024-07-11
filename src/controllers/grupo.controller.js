import Grupo from "../models/grupo.model.js";
import Linea from "../models/linea.model.js";


export const getGrupos = async (req, res) => {
    const grupos = await Grupo.findAll();
    // console.log("recibieno ", grupos)
    res.json(grupos);

};

export const getGrupo = async (req, res) => {

    const grupo = await Grupo.findByPk(req.params.grupoid)
    if (!grupo) return res.status(404).json({ message: 'grupo no encontrado adentro' })
    res.json(grupo);

};


export const createGrupos = async (req, res) => {
    const { grupo, descripcion, lineaid } = req.body;
    try {

        const linea = await Linea.findByPk(lineaid);
        if (!linea) return res.status(404).json({ meesage: 'Linea no encontrada' });

        const newGrupo = await Grupo.create({
            grupo,
            descripcion,
            lunes: linea.numerolinea,
            martes: linea.numerolinea,
            miercoles: linea.numerolinea,
            jueves: linea.numerolinea,
            viernes: linea.numerolinea,
            sabado: linea.numerolinea,
            domingo: linea.numerolinea,
            lineaid,
        });
        res.json({ newGrupo });


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



export const updateGrupos = async (req, res) => {

    try {
        const [updateRowsCount, updateGrupo] = await Grupo.update(req.body, {
            where: { grupoid: req.params.grupoid },
            returning: true,
        })

        if (updateRowsCount === 0) {
            return res.status(404).json({ meesage: 'Grupo no encontrado' });
        }
        res.json(updateGrupo[0]);

    } catch (error) {
        console.error(error)
    }

};

export const deleteGrupos = async (req, res) => {

    console.log("dato ", req.params.grupoid)

    const deletedRowCount = await Grupo.destroy(({
        where: { grupoid: req.params.grupoid },
    }));
    if (deletedRowCount === 0) {
        return res.status(404).json({ message: 'Grupo no encontrado' });
    }
    res.json({ message: 'Grupo dado de baja exitosamente' });


};



