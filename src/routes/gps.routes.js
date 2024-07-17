import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import { 
    getGpss,
    getGps,
    createGps,
    capturaGPS,
    eliminartodoGps,
    getGpsubi,
    updateGps,
} from "../controllers/gps.controller.js";


const router = Router();


router.post('/gpscoor/:rutaid', authRequired,capturaGPS)
router.delete('/gps', eliminartodoGps)
// *****************************************
// RUTAS EN UTILIZACION HASTA MIENTRAS DE ABAJO, ARRIBA NO 
// *****************************************
router.get('/gps', authRequired, getGpss)
router.get('/gps/:gpsid', authRequired, getGps)
router.post('/gps', authRequired, createGps )
router.get('/gpsubi/:gpsid',authRequired, getGpsubi)
router.put('/gpsupdate/:gpsid', authRequired, updateGps)

export default router;


