import axios from "../api/axios";

export const getRutasRequest = async() =>{
    try {
        const res = await axios.get('/ruta')
// enviar como un conjunto de datos no como un array especifo que es con res.data solo res
        // console.log("datos desde ruta.js ", res)
        return res
    } catch (error) {
        console.log("Error al obtener rutas ", error)
        throw error;
    }
}

export const getRutaRequest = async(rutaid)=> {
    try {
        const response = await axios.get(`/ruta/${rutaid}`)
        return response
    } catch (error) {
        console.log("Error al obtener rutas: ", error)
        throw error;
    }
}

export const createRutaRequest = async(userData) => {
    try {
        // console.log("ok antes ")
        const resp = await axios.post('/ruta', userData);
        // console.log("respuesta del servidor ", resp.data)
        // console.log("ver respuesta: ", resp)
        return resp;
    } catch (error) {
        if (error.response) {
            // La solicitud fue realizada y el servidor respondió con un estado de error
            console.log("Error de respuesta del servidor: ", error.response.data);
            console.log("Estado de error HTTP: ", error.response.status);
            console.log("Encabezados de respuesta: ", error.response.headers);
        } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            console.log("No se recibió respuesta del servidor: ", error.request);
        } else {
            // Ocurrió un error durante la configuración de la solicitud
            console.log("Error de configuración de la solicitud: ", error.message);
        }
        console.log("Error al crear rutas: ", error);
        throw error;

        // console.log("Error al crear rutas: ", error)
        // throw error;
    }

}

export const updateRutaRequest =(rutaid, ruta)=>{
    try {
        const response = axios.put(`/ruta/${rutaid}`, ruta);
        return response.data
    } catch (error) {
        console.error("Error al actualizar las rutas", error);
    }
};

export const deleteRutaRequest = (rutaid)=>{
    try {
        const response = axios.delete(`/ruta/${rutaid}`)
        // console.log("capturando error rutajs", rutaid)
        return response
    } catch (error) {
        console.error("Error al eliminar la ruta ", error)
    }

}



