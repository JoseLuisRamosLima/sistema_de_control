
import { z } from "zod";

export const vehiculoSchema = z.object({

    
    numplaca : z.string({
        required_error: 'Se requiere de Numero de Placa',
    }),
    
    modelo : z.string({
        required_error: 'Se requiere de modelo del auto.',
    }),
    
    color: z.string ({
        required_error: 'Se requiere de color del auto',
    }),
    
    cantidadpasajero: z.string().optional(),
    
    marca : z.string().optional(),




})





