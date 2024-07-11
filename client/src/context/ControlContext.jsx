
import { createContext, useContext, useState } from "react";
import {
    getGruposRequest,
    getGrupoRequest,
} from "../api/grupo";
import {
    getLineasRequest,
    getLineaRequest,
} from "../api/linea";

const ControlContext = createContext();

export const useControl =()=>{
    const context = useContext(ControlContext);

    if (!context) {
        throw new Error("useGrupo must be used within a LineaProvider")
    }
    return context

}

export function ControlProvider({children}) {
    const [grupos, setGrupos, lineas, setLineas] = useState();
    const getGrupos = async () => {
        try {
            const res = await getGruposRequest();
            console.log("datos de grupos: ", res);
            setGrupos(res.data || [])
        } catch (error) {
            console.error(error)
        }
    }
    const getGrupo = async (grupoid) => {
        try {
            console.log("entrando a context grupo")
            const res = await getGrupoRequest(grupoid)
            console.log("datos de la grupo context : ", res)
            console.log("ok en grupocontext de get grupo ")
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

    const getLineas = async() =>{
        try {
            const res = await getLineasRequest();
            // console.log("datos de lineas: ", res);
            setLineas(res.data || [])
        } catch (error) {
            console.error(error)
        }
        
    }
    const getLinea = async (lineaid) => {
        try {
            const res = await getLineaRequest(lineaid)
            console.log("datos de la linea context : ",res)
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ControlContext.Provider
            value={{
                grupos,
                lineas,
                getGrupo,
                getGrupos,
                getLinea,
                getLineas
            }}
        >
        {children}
        </ControlContext.Provider>    
    )

}
