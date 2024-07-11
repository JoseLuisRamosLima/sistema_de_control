import Rol from "../models/rol.model.js";


export const getGrupos = async (req, res) => {
    const rol = await Rol.find();
    res.json(rol);

};

export const createGrupos = async (req, res) => {
    const {modificar, baja, crear, admin} = req.body;
    try {
        const newRol = await Rol.create({
            modificar,
            baja,
            crear,
            admin,
        });
        const rolSave = await newRol.save();
        res.json({
            rolid: rolSave.rolid,
            modificar: rolSave.modificar,
            baja: rolSave.baja,
            crear: rolSave.crear,
            admin: rolSave.admin,
            createdAt: rolSave.createdAt,
            updatedAt: rolSave.updatedAt,
        });

        
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

export const getGrupo = async (req, res) => {

    const rol = await Rol.findByPk(req.params.id)
    if(!rol) return res.status(404).json({message: 'rol no encontrado'})
    res.json(rol);

};

export const updateGrupos = async (req, res) => {

    const rol = await Rol.findByPkAndUpdate(req.params.id, req.body)
    if(!rol) return res.status(404).json({message: 'rol no encontrado'})
    res.json(rol);


};

export const deleteGrupos = async (req, res) => {

    const rol = await Rol.findByPkAndDelete(req.params.id)
    if(!rol) return res.status(404).json({message: 'rol no encontrado'})
    res.json(rol);
    
};



