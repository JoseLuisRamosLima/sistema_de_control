import Persona from "../models/persona.model.js";


export const getPersonas = async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);

};

export const createPersona = async (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, edad} = req.body;
    try {

        const newPersona = await Persona.create({
            nombre,
            apellido_paterno,
            apellido_materno,
            edad,
        });
        const personaSave = await newPersona.save();
        res.json({Persona});

        
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

export const getPersona = async (req, res) => {

    const Persona = await Persona.findByPk(req.params.id)
    if(!Persona) return res.status(404).json({message: 'Persona no encontrado'})
    res.json(Persona);

};

export const updatePersona = async (req, res) => {

    const Persona = await Persona.findByPkAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!Persona) return res.status(404).json({message: 'Persona no encontrado'})
    res.json(Persona);


};

export const deletePersona = async (req, res) => {

    const Persona = await Persona.findByPkAndDelete(req.params.id)
    if(!Persona) return res.status(404).json({message: 'Persona no encontrado'})
    res.json(Persona);

};



