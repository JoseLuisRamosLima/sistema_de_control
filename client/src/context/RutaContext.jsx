import { createContext, useContext, useState } from "react";
import {
    createRutaRequest,
    getRutasRequest,
    deleteRutaRequest,
    getRutaRequest,
    updateRutaRequest
} from "../api/ruta";


const RutaContext = createContext();

export const useRuta = () => {
    const context = useContext(RutaContext);

    if (!context) {
        throw new Error("UseRuta must be used within a RutaProvider");
    }
    return context;

}

export function RutaProvider({ children }) {
    const [rutas, setRutas] = useState([]);

    const getRutas = async () => {
        try {
            const res = await getRutasRequest()
            // console.log("datos de rutacontext : ", res); 
            // console.log("datos dos  : ", res.data); 
            setRutas(res.data || [])
        } catch (error) {
            console.error(error)
        }

    }

    const createRuta = async (ruta) => {
        console.log("observando de rutacontext")
        const res = await createRutaRequest(ruta);
        console.log(res)

    }

    const deleteRuta = async (rutaid) => {
        try {

            const res = await deleteRutaRequest(rutaid);
            // console.log("respuesta de servidor: ",res)
            // console.log("respuesta stado",res.status)
            if (res.status === 200) setRutas(rutas.filter(ruta => ruta.rutaid != rutaid))
        } catch (error) {
            console.error(error)
        }
    };

    const getRuta = async (rutaid) => {
        try {
            const res = await getRutaRequest(rutaid)
            console.log("datos del ruta context : ",res)
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

    const updateRuta = async(rutaid, ruta)=>{ 
        try {
            await updateRutaRequest(rutaid, ruta);
        } catch (error) {
            console.error(error)
        }
    
    }


    return (
        <RutaContext.Provider
            value={{
                rutas,
                createRuta,
                getRutas,
                deleteRuta,
                getRuta,
                updateRuta
            }}
        >
            {children}

        </RutaContext.Provider>

    )

}



