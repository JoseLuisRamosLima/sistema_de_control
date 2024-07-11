import { z } from 'zod';

export const registerSchema = z.object({

    usuario: z.string({
        required_error: 'Se requiere Usuario',
    }),
    cargo: z.string({
        required_error: 'Se requiere cargo',
    }),
    password: z.string({
        required_error: 'Se requiere contraseña',
    }).min(6, {
        message: 'La contraseña debe ser de al menos 6 caracteres',
    }),


})

export const loginSchema = z.object({ 

    usuario: z.string({
        required_error: "Se requiere usuario",
    }),

    password: z.string({
        
        required_error: "Se requiere contraseña",
    }).min({
        message: "La contraseña debe ser de al menos 6 caracteres",
    })

})