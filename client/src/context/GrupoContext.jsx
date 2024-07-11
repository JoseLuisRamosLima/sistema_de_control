
import { createContext, useContext, useState } from "react";
import {
    getGruposRequest,
    createGrupoRequest,
    getGrupoRequest,
    deleteGrupoRequest,
    updateGrupoRequest
} from "../api/grupo";

const GrupoContext = createContext();

export const useGrupo = () => {
    const context = useContext(GrupoContext);
    console.log("dato context cgrupo " ,context)
    if (!context) {
        throw new Error("useGrupo must be used within a LineaProvider")
    }
    return context
}

export function GrupoProvider({ children }) {
    const [grupos, setGrupos] = useState([]);

    const getGrupos = async () => {
        try {
            const res = await getGruposRequest();
            console.log("datos de grupos: ", res);
            setGrupos(res.data || [])
        } catch (error) {
            console.error(error)
        }
    }
    const createGrupo = async (grupo) => {
        console.log("ok hasta aki creategrupo de grupo context")
        const res = await createGrupoRequest(grupo);
        console.log(res)

    }
    const deleteGrupo = async (grupoid) => {
        try {
            const res = await deleteGrupoRequest(grupoid);
            console.log("respuesta de servidor: ",res)
            console.log("respuesta stado",res.status)
            if (res.status === 200) setGrupos(grupos.filter(grupo => grupo.grupoid != grupoid))
        } catch (error) {
            console.error(error)
        }
    };
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
    const updateGrupo = async (grupoid, grupo) => {
        try {
            await updateGrupoRequest(grupoid, grupo);
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <GrupoContext.Provider
            value={{
                grupos,
                createGrupo,
                getGrupos,
                deleteGrupo,
                getGrupo,
                updateGrupo
            }}
        >
            {children}

        </GrupoContext.Provider>

    )
}
