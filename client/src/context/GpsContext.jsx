import { createContext, useContext, useState } from "react";
import { 
    getGpssRequest
} from "../api/gps";


const GpsContext = createContext();

export const useGps = () => {
    const context = useContext(GpsContext);
    console.log(" datos gps CONTEXT ", context)

    if(!context){
        console.log(" error en GPS CONTEXT ")
        throw new Error("UseGps must be used within a GpsProvider")
    }
    return context
}

export function GpsProvider ({ children }) {
    const [gpss, setGps ] =useState([]);

    const getGps = async() =>{
        try {
            const res = await getGpssRequest();
            console.log("123CONTEX 1K23I : ", res);
            setGps(res.data || [])
        } catch (error) {
            console.log("salio algo mal ")
            console.error(error)
        }
        
    }
    return(
            <GpsContext.Provider
                value={{
                    gpss,
                    getGps
                }}
            >
            {children}

            </GpsContext.Provider>
        
        )
}




