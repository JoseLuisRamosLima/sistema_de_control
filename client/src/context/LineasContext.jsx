
import { createContext, useContext, useState } from "react";
import { createLineaRequest,
        getLineasRequest,
        deleteLineaRequest,
        getLineaRequest,
        updateLineaRequest
} from "../api/linea";


const LineaContext = createContext();


export const useLinea = () => {
    const context = useContext(LineaContext);
    console.log(" datos linea context ", context)

    if(!context){
        throw new Error("UseLinea must be used within a LineaProvider")
    }
    return context
}

export function LineaProvider ({ children }) {
    const [lineas, setLineas ] =useState([]);

    const getLineas = async() =>{
        try {
            const res = await getLineasRequest();
            // console.log("datos de lineas: ", res);
            setLineas(res.data || [])
        } catch (error) {
            console.error(error)
        }
        
    }

    const createLinea = async (linea)=> {
        console.log("ok hasta aki createlinea de lineascontext")
        const res = await createLineaRequest(linea);
        console.log(res)
        
    
    }

    const deleteLinea = async (lineaid) => {
        try {
            const res = await deleteLineaRequest(lineaid);
            // console.log("respuesta de servidor: ",res)
            // console.log("respuesta stado",res.status)
            if (res.status === 200) setLineas(lineas.filter(linea => linea.lineaid != lineaid))
        } catch (error) {
            console.error(error)
        }
    };
    const getLinea = async (lineaid) => {
        try {
            const res = await getLineaRequest(lineaid)
            console.log("datos de la linea context : ",res)
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

    const updateLinea = async(lineaid, linea)=>{ 
        try {
            await updateLineaRequest(lineaid, linea);
        } catch (error) {
            console.error(error)
        }
    
    }
    return(
            <LineaContext.Provider
                value={{
                    lineas,
                    createLinea,
                    getLineas,
                    deleteLinea,
                    getLinea,
                    updateLinea
                }}
            >
            {children}

            </LineaContext.Provider>
        
        )
}




