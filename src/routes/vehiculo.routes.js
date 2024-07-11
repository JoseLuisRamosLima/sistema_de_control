import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getVehiculos,
    getVehiculo,
    createVehiculo,
    updateVehiculo,
    deleteVehiculo,
    } from "../controllers/vehiculo.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
// import { vehiculoSchema } from "../schemas/vehiculo.schema.js";
    


const router = Router();

router.get('/vehiculos', authRequired, getVehiculos)
router.get('/vehiculo/:vehiculoid', authRequired, getVehiculo)

// registro de datos 
router.post('/vehiculo', authRequired, createVehiculo )


router.put('/vehiculo/:vehiculoid', authRequired, updateVehiculo)
router.delete('/vehiculo/:vehiculoid', authRequired, deleteVehiculo)


export default router;