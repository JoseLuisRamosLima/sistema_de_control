import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencilPlus } from "@mdi/js";
import GrupoVehiculo from "../components/VehiculoCard";
import { useVehiculo } from "../context/VehiculoContext";


function VehiculoPage() {

    const { getVehiculos, vehiculos } = useVehiculo();

    useEffect(() => {
        getVehiculos();
    }, []);
    // if (vehiculos.length === 0) return (<h1>No se creo vehiculos aun</h1>)


    return (
        <nav className="px-24">
        <Link to='/add-vehiculo'>
            <button className=" px-24">
                <Icon path={mdiPencilPlus} size={1} ></Icon>
                Adicionar nuevo vehiculo
            </button>
        </Link>
        <div className=" grid grid-cols-3 gap-2 px-20 py-10 ">
            {vehiculos.length > 0 ? (
                vehiculos.map((vehiculo) => (
                    <GrupoVehiculo vehiculo={vehiculo} key={vehiculo.vehiculoid} />
                ))
            ) : (
                <p>No se crearon vehiculos. </p>
            )}
        </div>
    </nav>

    )
}

export default VehiculoPage