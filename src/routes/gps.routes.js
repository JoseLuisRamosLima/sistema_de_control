import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import { 
    getGpss,
    getGps,
    createGps,
    capturaGPS,
    eliminartodoGps,
} from "../controllers/gps.controller.js";


const router = Router();


router.get('/gps', authRequired, getGpss)
router.get('/gps/:gpsid', authRequired, getGps)
router.post('/gpscoor/:rutaid', authRequired,capturaGPS)
router.delete('/gps', eliminartodoGps)

router.post('/gps', authRequired, createGps )

export default router;


