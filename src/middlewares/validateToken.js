import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";



export const authRequired = (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // const { token } = req.cookies;

    if(!token){
        return res.status(401).json({
            message: "No token, authorizacion denegado"
        });
    } 
    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err) {
            console.error("Error al verificar token: ", err);
            return res.status(403).json({ message: "Token invalido "});
        }
        console.log("token aceptado enviando datos ");
        req.User = user;
        next();
    });
    

};

