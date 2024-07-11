
import { useForm } from "react-hook-form";
import { useRuta } from "../context/RutaContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function RutaFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createRuta, getRuta, updateRuta } = useRuta();
    const navigate = useNavigate();
    const params = useParams()

    useEffect(()=>{
        async function loadRuta() {
            if(params.rutaid){
                // console.log("agarrando dato ", params.rutaid)
                const ruta = await getRuta(params.rutaid)
                console.log("MOSTRANDO DATOS ",ruta)
                setValue('nombre', ruta.nombre)
                setValue('descripcion', ruta.descripcion)
                setValue('latitud1', ruta.latitud1)
                setValue('longitud1', ruta.longitud1)
                setValue('latitud2', ruta.latitud2)
                setValue('longitud2', ruta.longitud2)
                setValue('latitud3', ruta.latitud3)
                setValue('longitud3', ruta.longitud3)
            }
        }
        loadRuta()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.rutaid) {
            updateRuta(params.rutaid, data)
        }else{
            createRuta(data);
        }
        navigate('/rutas')
    });
    

    return (
        <nav className=" flex justify-center ">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
            <h1 className="text-2xl font-bold flex justify-center">Registro de Rutas</h1>
                <input
                    type="text"
                    placeholder="Ruta"
                    {...register("nombre")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <textarea rows="3" placeholder="Descripcion de la Ruta"
                    {...register("descripcion")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                ></textarea>
                <h3 className="text-2xl font-bold flex justify-right">Insertar Puntos Estrategicos </h3>
                <input
                    type="text"
                    placeholder="Latitud del Punto A"
                    {...register("latitud1")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Longitud del Punto A"
                    {...register("longitud1")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                                <input
                    type="text"
                    placeholder="Latitud del Punto B"
                    {...register("latitud2")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Longitud del Punto B"
                    {...register("longitud2")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                                <input
                    type="text"
                    placeholder="Latitud del Punto C"
                    {...register("latitud3")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Longitud del Punto C"
                    {...register("longitud3")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />


                <button>Insertar</button>
            </form>
        </div>
        </nav>
    )
}

export default RutaFormPage