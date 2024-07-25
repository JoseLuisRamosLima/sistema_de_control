import axios from "../api/axios";

export const getChofersRequest = async() =>{
    try {
        const res = await axios.get('/chofers')
        return res.data;
    } catch (error) {
        console.log("Error al obtener los choferes ", error)
        throw error;
    }
}

export const getChoferRequest = async(choferid)=> {
    try {
        const response = await axios.get(`/chofer/${choferid}`)
        return response.data;
    } catch (error) {
        console.log("Error al obtener el chofer: ", error)
        throw error;
    }
}

export const createChoferRequest = async(chofer) => {
    try {
        const resp = await axios.post('/chofer', chofer)
        return resp.data;
    } catch (error) {
        console.log("Error al crear al chofer: ", error)
        throw error;
    }

}

export const updateChoferRequest =(choferid, chofer)=>{
    try {
        const response = axios.put(`/chofer/${choferid}`, chofer);
        console.log("ok entro chofer update back", response)
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el chofer", error);
    }
};

export const deleteChoferRequest = (choferid)=>{
    try {
        const response = axios.delete(`/chofer/${choferid}`)
        return response.data;
    } catch (error) {
        console.error("Error al eliminar al chofer ", error)
    }

}



