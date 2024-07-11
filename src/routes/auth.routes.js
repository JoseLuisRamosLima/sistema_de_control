import { Router } from "express";
import {login, 
        registerusuario, 
        logout,
        profile,
        verifyToken,
        loginapp,
        } from '../controllers/auth.controller.js';
import {authRequired} from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";




const router = Router()
// router.get('/test-backend', (req, res) => {
//         res.send('¡Hola desde el backend!');
// });
// rutas para registro y login 
// router.post('/registerrol', registerrol);
// router.post('/registerpersona', registerpersona);
// router.post('/registercoordenada', registercoordenada);
// router.post('/registergps', registergps);
// // router.post('/registerchofer', registerchofer);
// router.post('/registervehiculo', registervehiculo);
// // router.post('/registergrupo', registergrupo);
// router.post('/registerruta', registerruta);




router.post('/registerusuario', validateSchema(registerSchema), registerusuario);


router.post('/login', validateSchema(loginSchema), login);
router.post('/loginapp', loginapp);
router.post('/logout', logout);
router.get('/auth/verify', verifyToken );
router.get('/profile', authRequired, profile);






export default router


