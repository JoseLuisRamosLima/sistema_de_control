import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js';

export function createAccessToken(payload){
    const timezone = 'America/La_Paz'; // Zona horaria para La Paz, Bolivia
    const currentTime = new Date(); // Hora actual
    const expiresAt = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000)); // 1 día de expiración
    const expUnixTimestamp = Math.floor(expiresAt.getTime() / 1000); // Tiempo de expiración en formato UNIX timestamp

    // Agregar la zona horaria al payload
    payload.timezone = timezone;
    payload.expiresAt = Math.floor(expiresAt.getTime() / 1000);

    
    return new Promise((resolve, reject)=>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token)=>{
                if (err) reject(err);
                resolve(token)
            }
            );
    });
}

