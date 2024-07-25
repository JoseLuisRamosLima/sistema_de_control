
import axios from "./axios";

export const getGruposRequest = async() =>{
    try {
        const res = await axios.get('/grupo')
        console.log("dato grupos ")
        return res
    } catch (error) {
        console.log("Erro el obtener grupos desde back: ", error)
        throw error;
    }
} 

export const getGrupoRequest = async(grupoid) =>{
    try {
        console.log("datos okgetgrpo");
        const response = await axios.get(`/grupo/${grupoid}`);
        console.log("datos del bak get grupo ", response);
        return response
    } catch (error) {
        console.log("Erro el obtener grupo back : ", error)
        throw error;
    }
};

export const createGrupoRequest = async(grupo) =>{

    try {
        // console.log("hasta aki ok de create ")
        // console.log("datos enviado ", grupo)
        const res = await axios.post('/grupo', grupo)
        return res;
    } catch (error) {
        console.log("Erro el obtener gurpos de create: ", error)
        throw error;
    }
}; 




export const updateGrupoRequest = (grupoid, grupo) =>{
    try {
        const response = axios.put(`/grupo/${grupoid}`, grupo);
        console.log("ok update grupo UPDATES ", response)
        return response.data
    } catch (error) {
        console.log("Erro el obtener grupos update: ", error)
        throw error;
    }
}; 


export const deleteGrupoRequest = (grupoid) => {
    try {
        console.log('datosdel bakk', grupoid)
        const response = axios.delete(`/grupo/${grupoid}`)
        return response.data
    } catch (error) {
        console.log("Erro el obtener grupo delete: ", error)
        throw error;
    }
}; 



