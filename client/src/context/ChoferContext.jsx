
import { createContext, useContext, useState } from "react";
import { createChoferRequest,
        getChofersRequest,
        updateChoferRequest,
        deleteChoferRequest,
        getChoferRequest
} from "../api/chofer";

const ChoferContext = createContext();

export const useChofer = () =>{
    const context= useContext(ChoferContext);

    if(!context) {
        throw new Error("UseChofer must be used within a RutaProvider");
    }
    return context;
}

export function ChoferProvider ({ children }){

    const [ chofers, setChofer] = useState([]);

    const getChofers = async() =>{

        try {
            const res = await getChofersRequest();
            console.log("datos de chofer: " ,res)
            setChofer(res.data || [])
        } catch (error) {
            console.error(error)
        }    
    
    }


    const createChofer= async(chofer) => {
        console.log("observando de chofer context ")
        const res = await createChoferRequest(chofer);
        console.log(res)
    
    }
    const deleteChofer = async (choferid) => {
        try {
            const res = await deleteChoferRequest(choferid);
            console.log("respuesta de servidor: ",res)
            console.log("respuesta stado",res.status)
            if (res.status === 200) sertChofer(chofers.filter(chofer => chofer.choferid != choferid))
        } catch (error) {
            console.error(error)
        }
    };

    const getChofer = async (choferid) => {
        try {
            const res = await getChoferRequest(choferid)
            console.log("datos de la chofer context : ", res)
            console.log("ok en grupocontext de get chofer ")
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }
    const updateChofer = async (choferid, chofer) => {
        try {
            await updateChoferRequest(choferid, chofer);
        } catch (error) {
            console.error(error)
        }

    }

    return(
        <ChoferContext.Provider
        value={{
            chofers,
            createChofer,
            getChofers,
            deleteChofer,
            getChofer,
            updateChofer
        }}
        >
            {children}

        </ChoferContext.Provider>
        
        )

}





