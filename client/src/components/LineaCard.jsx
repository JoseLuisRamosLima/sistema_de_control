import { useLinea } from "../context/LineasContext";
import { Link } from "react-router-dom";


function LineaCard({ linea }) {
    const { deleteLinea } = useLinea();


    return (
        <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
            <header className=" flex justify-between">
                <h1 className=" text-2xl font-bold">Linea: {linea.numerolinea}</h1>
                <div className=" flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteLinea(linea.lineaid);
                    }}>Dar de Baja</button>
                    <Link to={`/linea/${linea.lineaid}`}>Editar</Link>
                </div>
            </header>
            <p className=" text-slate-300">Numero Linea: {linea.numerolinea}</p>
            <p className=" text-slate-300">Color: {linea.color}</p>
            <p className=" text-slate-300">Rutas: {linea.ruta}</p>
            <p className=" text-slate-300">codRuta: {linea.rutaid}</p>

        </div>



    )
}

export default LineaCard


