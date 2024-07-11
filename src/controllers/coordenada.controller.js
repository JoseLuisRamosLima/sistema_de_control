import Coordenada from "../models/coordenada.model.js";


export const getCoordenadas = async (req, res) => {
    const coordenadas = await Coordenada.find();
    res.json(coordenadas);

};

export const createCoordenadas = async (req, res) => {
    const {direccion, latitud, longitud} = req.body;
    try {
        const newCoordenada = await Coordenada.create({
            direccion,
            latitud,
            longitud,
        });
        const coordenadaSave = await newCoordenada.save();
        res.json({
            coordenadaid: coordenadaSave.coordenadaid,
            direccion: coordenadaSave.direccion,
            latitud: coordenadaSave.latitud,
            longitud: coordenadaSave.longitud,
            createdAt: coordenadaSave.createdAt,
            updatedAt: coordenadaSave.updatedAt,
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

export const getCoordenada = async (req, res) => {

    const coordenadas = await Coordenada.findByPk(req.params.id)
    if(!coordenadas) return res.status(404).json({message: 'coordenadas no encontrado'})
    res.json(coordenadas);

};

export const updateCoordenadas = async (req, res) => {
    
    const coordenadas = await Coordenada.findByPkAndUpdate(req.params.id, req.body, { 
        new: true
    })
    if(!coordenadas) return res.status(404).json({message: 'coordenadas no encontrado'})
    res.json(coordenadas);
    
};

export const deleteCoordenadas = async (req, res) => {
    
    const coordenadas = await Coordenada.findByPkAndDelete(req.params.id)
    if(!coordenadas) return res.status(404).json({message: 'coordenadas no encontrado'})
    res.json(coordenadas);

};



