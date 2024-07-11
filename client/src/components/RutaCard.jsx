
import { useRuta } from "../context/RutaContext";
import { Link } from "react-router-dom";

function RutaCard({ruta}) {
    const { deleteRuta }=useRuta();

    return (
            <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
                <header className=" flex justify-between">
                    <h1 className=" text-2xl font-bold">Ruta: {ruta.nombre}</h1>
                    <div className=" flex gap-x-2 items-center">
                        <button onClick={() =>{
                            deleteRuta(ruta.rutaid);
                        }}>Dar de Baja </button>
                        <Link to={`/ruta/${ruta.rutaid}`}>Editar</Link>
                    </div>
                </header>
                <p className=" text-slate-300">Descripcion: {ruta.descripcion}</p>
                <p className=" text-slate-300">Punto 1 La: {ruta.latitud1}</p>
                <p className=" text-slate-300">Punto 1 Lo: {ruta.longitud1}</p>
                <p className=" text-slate-300">Punto 2 La: {ruta.latitud2}</p>
                <p className=" text-slate-300">Punto 2 Lo: {ruta.longitud2}</p>
                <p className=" text-slate-300">Punto 3 La: {ruta.latitud3}</p>
                <p className=" text-slate-300">Punto 3 Lo: {ruta.longitud3}</p>
                {/* <p>{new Date(ruta.date).toLocaleDateString()}</p> */}
            </div>
    )
}

export default RutaCard




            // <div key={ruta.rutaid}>
            //     <h1>datos </h1>
            //     <h1>{ruta.nombre}</h1>
            //     <p>{ruta.descripcion}</p>
            //     <p>{ruta.latitud1}</p>
            //     <p>{ruta.longitud1}</p>
            //     <p>{ruta.latitud2}</p>
            //     <p>{ruta.longitud2}</p>
            //     <p>{ruta.latitud3}</p>
            //     <p>{ruta.longitud3}</p>
            // </div>
