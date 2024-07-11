import { useEffect } from "react";

import Navbar from "../components/Navbar";
import { useChofer } from "../context/ChoferContext";
import { useGps } from "../context/GpsContext";
import { useGrupo } from "../context/GrupoContext";
import { useLinea } from "../context/LineasContext";
import { useRuta } from "../context/RutaContext";
import { useVehiculo } from "../context/VehiculoContext";
import DashboardCard from "../components/DasboardCard";

import {
    mdiLogout, mdiHome, mdiRoutes, mdiSortNumericVariant, mdiCarMultiple, mdiFileAccount, mdiAccountMultiple, mdiGroup, mdiAccountMultipleMinusOutline, mdiAccountMultipleCheck, mdiAccountMultiplePlus, mdiControllerClassic, mdiController, mdiCommentRemoveOutline, mdiCalendarSync
} from '@mdi/js'

import Icon from "@mdi/react";
function Dashboard({ sidebarToggle, setSidebarToggle }) {
    const { getChofers, chofers } = useChofer();
    const { getGps, gpss } = useGps();
    const { getGrupo, grupos } = useGrupo();
    const { getLinea, lineas } = useLinea();
    const { getRuta, rutas } = useRuta();
    const { getVehiculo, vehiculos } = useVehiculo();

    useEffect(() =>{
        getGps();
    }, []);
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     getChofers();
    //     getGps();
    //     getGrupo();
    //     getLinea();
    //     getRuta();
    //     getVehiculo();
    // }, []);
    return (
        <nav className=" px-24">
            <h1>BIENVENIDO AL PANEL DE ADMINISTRACION Y CONTROL DE RUTAS "SINDICATO 23 DE MARZO"</h1>
            <div className=" grid grid-cols-3 gap-2 px-20 py-10 ">
                <div>
                    <DashboardCard title="Total de Choferes 23"/>
                {/* <Icon path={mdiRoutes} size={1} /> */}
                </div>
                <DashboardCard title="Total de Vehículos 12"/>
                <DashboardCard title="Total de GPS 4" />
                <DashboardCard title="Total de Grupos 2" />
                <DashboardCard title="Total de Líneas 2" />
                <DashboardCard title="Total de Rutas 2 " />

            </div>
        </nav>

    )
}

export default Dashboard;
