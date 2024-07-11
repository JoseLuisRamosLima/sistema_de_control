
import z from "zod";

export const grupoSchema = z.object({

    grupo: z.string({
        required_error: 'Se requiere de nombre de Grupo'
    }),
    descripcion: z.string().optional(),

    lunes: z.string().optional(),
    martes: z.string().optional(),
    miercoles: z.string().optional(),
    juesves: z.string().optional(),
    viernes: z.string().optional(),
    sabado: z.string().optional(),
    domingo: z.string().optional(),



})







