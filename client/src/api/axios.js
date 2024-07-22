
import axios from "axios";

const instance = axios.create({
    // **************************************
    // CONSUMO DE ENDPOINT AL CODIGO LOCAL DE BACKEND 
    // baseURL: 'http://localhost:3000/api',
    // **************************************
    // CONSUMO DE ENSPOINT AL CODIGO DE PRODUCCION HOST ====RENDER====
    baseURL: 'https://sistema-de-control.onrender.com/api',
    withCredentials:true
})

export default instance


