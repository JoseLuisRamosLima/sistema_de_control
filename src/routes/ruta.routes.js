import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getRutas,
    getRuta,
    createRuta,
    updateRuta,
    deleteRuta,
} from "../controllers/ruta.controller.js";

const router = Router();

router.get('/ruta', authRequired, getRutas)
router.get('/ruta/:rutaid', authRequired, getRuta)
router.post('/ruta', authRequired, createRuta )
router.put('/ruta/:rutaid', authRequired, updateRuta)
router.delete('/ruta/:rutaid', authRequired, deleteRuta)


export default router;




