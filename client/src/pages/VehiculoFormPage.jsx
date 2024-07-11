
import { useForm } from "react-hook-form";
import { useVehiculo } from "../context/VehiculoContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


function VehiculoFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createVehiculo, getVehiculo, updateVehiculo } = useVehiculo();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadVehiculo() {
            if (params.vehiculoid) {
                console.log("agarrando dato vehiculo de FORM ", params.vehiculoid)
                const vehiculo = await getVehiculo(params.vehiculoid)
                // console.log("MOSTRANDO DATOS ", vehiculo)
                setValue('cantidadpasajero', vehiculo.cantidadpasajero)
                setValue('numplaca', vehiculo.numplaca)
                setValue('modelo', vehiculo.modelo)
                setValue('color', vehiculo.color)
                setValue('marca', vehiculo.marca)
                setValue('gpsid', vehiculo.gpsid)
                setValue('choferid', vehiculo.choferid)
                setValue('grupoid', vehiculo.grupoid)

            }
        }
        loadVehiculo()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.vehiculoid) {
            // console.log("datos de grupoformpage", vehiculoid)
            updateVehiculo(params.vehiculoid, data)
        } else {
            createVehiculo(data);
        }
        navigate('/vehiculos')
    })

    return (

        <nav className=" flex justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    <h1 className="text-2xl font-bold flex justify-center">Registro de Vehiculos</h1>
                    <input
                        type="text"
                        placeholder="Numero de Placa"
                        {...register("numplaca")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Modelo"
                        {...register("modelo")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Marca"
                        {...register("marca")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Color"
                        {...register("color")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Numero pasajeros"
                        {...register("cantidadpasajero")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Gpsid"
                        {...register("gpsid")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Choferid"
                        {...register("choferid")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Gruposid"
                        {...register("grupoid")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />

                    <button>Insertar</button>
                </form>
            </div>
        </nav>


    )
}

export default VehiculoFormPage
