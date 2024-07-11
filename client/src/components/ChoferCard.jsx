
import { useChofer } from '../context/ChoferContext'
import { Link } from "react-router-dom";

function GrupoCard({ chofer }) {
    const { deleteChofer } = useChofer();

    return (
        <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
            <header className=" flex justify-between">
                <h1 className=" text-2xl font-bold">Codigo Chofer: {chofer.codchofer}</h1>
                <div className=" flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteChofer(chofer.choferid);
                    }}>Dar de Baja</button>
                    <Link to={`/chofer/${chofer.choferid}`}>Editar</Link>
                </div>
            </header>
            <p className=" text-slate-300">Codigo Chofer: {chofer.codchofer}</p>
            {/* <p className=" text-slate-300">Cod Us: {chofer.usuarioid}</p> */}
            <p className=" text-slate-300">Cantidad Auto: {chofer.cantidadauto }</p>

        </div>

    )
}

export default GrupoCard