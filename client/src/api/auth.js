import axios from "../api/axios";

// const API = 'http://localhost:3000/api'


export const registerusuario = async(userData)=> {
    try {
        console.log("capturando hasta aki")
        const res = await axios.post(`/registerusuario`, userData);
        console.log("respuesta del servido DE AUTH.JSr", res.data);
        console.log("inserccion correcto");
        return res;
    } catch (error) {
        console.error("Error al realizar solicitud", error);
        throw error;
    }

};

export const loginRequest = user => axios.post(`/login`, user );

export const verifyTokenRequest = () => axios.get('/auth/verify');


