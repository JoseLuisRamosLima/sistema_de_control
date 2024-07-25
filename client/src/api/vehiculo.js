import axios from "../api/axios";

export const getVehiculosRequest = async() =>{
    try {
        const response = await axios.get('/vehiculos')
        return response
    } catch (error) {
        console.log("Error al obtener los vehiculos ", error)
        throw error;
    }
}

export const getVehiculoRequest = async(vehiculoid)=> {
    try {
        const response = await axios.get(`/vehiculo/${vehiculoid}`)
        return response
    } catch (error) {
        console.log("Error al obtener el vehiculo: ", error)
        throw error;
    }
}

export const createVehiculoRequest = async(vehiculo) => {
    try {
        const resp = await axios.post('/vehiculo', vehiculo)
        return resp;
    } catch (error) {
        console.log("Error al crear el vehiculo: ", error)
        throw error;
    }

}

export const updateVehiculoRequest =(vehiculoid, vehiculo)=>{
    try {
        const response = axios.put(`/vehiculo/${vehiculoid}`, vehiculo);
        return response.data
    } catch (error) {
        console.error("Error al actualizar el vehiculo", error);
    }
};

export const deleteVehiculoRequest = (vehiculoid)=>{
    try {
        const response = axios.delete(`/vehiculo/${vehiculoid}`)
        return response.data
    } catch (error) {
        console.error("Error al eliminar el vehiculo ", error)
    }

}



