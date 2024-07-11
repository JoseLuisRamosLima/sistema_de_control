import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getChofers,
    getChofer,
    createChofer,
    updateChofer,
    deleteChofer,
} from "../controllers/chofer.controller.js";
const router = Router();

router.get('/chofers', authRequired, getChofers)
router.get('/chofer/:choferid', authRequired, getChofer)
router.post('/chofer', authRequired, createChofer )
router.put('/chofer/:choferid', authRequired, updateChofer)
router.delete('/chofer/:choferid', authRequired, deleteChofer)


export default router;
