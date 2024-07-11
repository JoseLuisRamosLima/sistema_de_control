import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getTrabajoLinea,
    } from "../controllers/trabajos.controller.js";


const router = Router();
router.get('/trabajoslinea', authRequired, getTrabajoLinea)

// router.get('/trabajos', authRequired, getTrabajos)
// router.get('/trabajo/:trabajoid', authRequired, getTrabajo)
// // registro de datos 
// router.post('/trabajo', authRequired, createTrabajo )
// // router.put('/trabajo/:trabajoid', authRequired, updateLinea)
// router.delete('/trabajo/:trabajoid', authRequired, deleteTrabajo)


export default router;