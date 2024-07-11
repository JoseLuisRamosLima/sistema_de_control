import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getGrupos,
    getGrupo,
    createGrupos,
    updateGrupos,
    deleteGrupos,
} from "../controllers/grupo.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { grupoSchema } from "../schemas/grupo.schema.js";



const router = Router();

router.get('/grupo', authRequired, getGrupos)
router.get('/grupo/:grupoid', authRequired, getGrupo)
// post registro de datos 
router.post('/grupo', authRequired, validateSchema(grupoSchema), createGrupos )
router.put('/grupo/:grupoid', authRequired, updateGrupos)
router.delete('/grupo/:grupoid', authRequired, deleteGrupos)


export default router;
