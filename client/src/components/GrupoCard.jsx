
import { useGrupo } from '../context/GrupoContext'
import { Link } from "react-router-dom";

function GrupoCard({ grupo }) {
    const { deleteGrupo } = useGrupo();

    return (
        <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
            <header className=" flex justify-between">
                <h1 className=" text-2xl font-bold">Grupo: {grupo.grupo}</h1>
                <div className=" flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteGrupo(grupo.grupoid);
                    }}>Dar de Baja</button>
                    <Link to={`/grupo/${grupo.grupoid}`}>Editar</Link>
                </div>
            </header>
            <p className=" text-slate-300">Nombre Grupo: {grupo.grupo}</p>
            <p className=" text-slate-300">Descripcion: {grupo.descripcion}</p>
            <p className=" text-slate-300">Linea: {grupo.lineaid}</p>
            <p className=" text-slate-300">Lunes: {grupo.lunes}</p>
            <p className=" text-slate-300">Martes: {grupo.martes}</p>
            <p className=" text-slate-300">Miercoles: {grupo.miercoles}</p>
            <p className=" text-slate-300">Jueves: {grupo.jueves}</p>
            <p className=" text-slate-300">Viernes: {grupo.viernes}</p>
            <p className=" text-slate-300">Sabado: {grupo.sabado}</p>
            <p className=" text-slate-300">Domingo: {grupo.domingo}</p>
        </div>

    )
}

export default GrupoCard