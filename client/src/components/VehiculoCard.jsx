import { useVehiculo } from '../context/VehiculoContext'
import { Link } from "react-router-dom";

function VehiculoCard({ vehiculo }) {
    const { deleteVehiculo } = useVehiculo();

    return (
        <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
            <header className=" flex justify-between">
                <h1 className=" text-2xl font-bold">Vehiculo: {vehiculo.numplaca}</h1>
                <div className=" flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteVehiculo(vehiculo.vehiculoid);
                    }}>Dar de Baja</button>
                    <Link to={`/vehiculo/${vehiculo.vehiculoid}`}>Editar</Link>
                </div>
            </header>
            <p className=" text-slate-300">Modelo: {vehiculo.modelo}</p>
            <p className=" text-slate-300">Color: {vehiculo.color}</p>
            <p className=" text-slate-300">Marca: {vehiculo.marca}</p>
            <p className=" text-slate-300">Cantidad: {vehiculo.cantidadpasajero}</p>
            <p className=" text-slate-300">IDGPS: {vehiculo.gpsid}</p>
            <p className=" text-slate-300">Cod Chofer:{vehiculo.choferid}</p>
            <p className=" text-slate-300">Cod Grupo:   {vehiculo.grupoid}</p>

        </div>
    )
}

export default VehiculoCard