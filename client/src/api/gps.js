import axios from "../api/axios";



export const getGpssRequest = async() =>{
    try {
        console.log("ok entro al gps axios js")
        const res = await axios.get('/gps')
        console.log("ok gps get FRONTEND  ", res)
        return res.data;
    } catch (error) {
        console.log("Error al obtener gps ", error)
        throw error;
    }
}
