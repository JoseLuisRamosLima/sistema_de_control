import { createContext, useContext, useState } from "react";

import {
    getVehiculosRequest,
    getVehiculoRequest,
    createVehiculoRequest,
    updateVehiculoRequest,
    deleteVehiculoRequest
} from "../api/vehiculo";

const VehiculoContext = createContext();

export const useVehiculo = () => {
    const context = useContext(VehiculoContext);

    if (!context) {
        throw new Error("useVehiculo must be used within a LineaProvider")
    }
    return context
}

export function VehiculoProvider({ children }) {
    const [vehiculos, setVehiculos] = useState([]);

    const getVehiculos = async () => {
        try {
            const res = await getVehiculosRequest();
            console.log("datos de vehiculos: ", res)
            setVehiculos(res.data || [])
        } catch (error) {
            console.error(error)
        }
    }

    const createVehiculo = async (vehiculo) => {
        // console.log("ok hasta aki creategrupo de grupo context")
        const res = await createVehiculoRequest(vehiculo);
        console.log(res)

    }
    const deleteVehiculo = async (vehiculoid) => {
        try {
            const res = await deleteVehiculoRequest(vehiculoid);
            console.log("respuesta de servidor: ", res)
            console.log("respuesta stado", res.status)
            if (res.status === 200) setVehiculos(vehiculos.filter(vehiculo => vehiculo.vehiculoid != vehiculoid))
        } catch (error) {
            console.error(error)
        }
    };
    const getVehiculo = async (vehiculoid) => {
        try {
            console.log("entrando a context grupo")
            const res = await getVehiculoRequest(vehiculoid)
            console.log("datos de la grupo context : ", res)
            console.log("ok en grupocontext de get grupo ")
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }
    const updateVehiculo = async (vehiculoid, vehiculo) => {
        try {
            await updateVehiculoRequest(vehiculoid, vehiculo);
        } catch (error) {
            console.error(error)
        }

    }


    return (
        <VehiculoContext.Provider
            value={{
                vehiculos,
                createVehiculo,
                getVehiculos,
                deleteVehiculo,
                getVehiculo,
                updateVehiculo
            }}
        >
            {children}

        </VehiculoContext.Provider>

    )
}

export default VehiculoContext