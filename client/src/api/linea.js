import axios from "../api/axios";

export const getLineasRequest = async() =>{
    try {
        const res = await axios.get('/linea')
        console.log("ok ligea get front ", res)
        return res
    } catch (error) {
        console.log("Error al obtener rutas ", error)
        throw error;
    }
}

export const getLineaRequest = async(lineaid)=> {
    try {
        const response = await axios.get(`/linea/${lineaid}`)
        // console.log("dato lineas get" , response)
        return response
    } catch (error) {
        console.log("Error al obtener la linea : ", error)
        throw error;
    }
}

export const createLineaRequest = async(lineaData) => {
    try {
        const resp = await axios.post('/linea', lineaData)
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
    }
}

export const updateLineaRequest =(lineaid, linea)=>{
    try {
        const response = axios.put(`/linea/${lineaid}`, linea);
        return response.data
    } catch (error) {
        console.error("Error al actualizar la linea", error);
    }
};

export const deleteLineaRequest = (lineaid)=>{
    try {
        const response = axios.delete(`/linea/${lineaid}`)
        return response.data
    } catch (error) {
        console.error("Error al eliminar la linea ", error)
    }

}



