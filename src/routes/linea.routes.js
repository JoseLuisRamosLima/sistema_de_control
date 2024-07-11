import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getLineas,
    getLinea,
    createLinea,
    updateLinea,
    deleteLinea,
    getLineasConCoordenadas,
    } from "../controllers/linea.controller.js";
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { vehiculoSchema } from "../schemas/linea.schema.js";
    


const router = Router();

router.get('/linea', authRequired, getLineas)
router.get('/linea/:lineaid', authRequired, getLinea)
router.get('/lineacoor', authRequired, getLineasConCoordenadas)

// registro de datos 
router.post('/linea', authRequired, createLinea )


router.put('/linea/:lineaid', authRequired, updateLinea)
router.delete('/linea/:lineaid', authRequired, deleteLinea)


export default router;