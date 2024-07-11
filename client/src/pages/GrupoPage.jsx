
import { useEffect } from "react";
import { useGrupo } from "../context/GrupoContext";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencilPlus } from "@mdi/js";
import GrupoCard from "../components/GrupoCard";

function GrupoPage() {
    const { getGrupos, grupos } = useGrupo();

    useEffect(() => {
        getGrupos();
    }, []);
    // if (grupos.length === 0) return (<h1>No se creo grupos aun</h1>)

    return (
        <nav className="px-24">
            <Link to='/add-grupo'>
                <button className=" px-24">
                    <Icon path={mdiPencilPlus} size={1} ></Icon>
                    Adicionar nuevo grupo
                </button>
            </Link>
            <div className=" grid grid-cols-3 gap-2 px-20 py-10 ">
                {grupos.length > 0 ? (
                    grupos.map((grupo) => (
                        <GrupoCard grupo={grupo} key={grupo.grupoid} />
                    ))
                ) : (
                    <p>No se creo grupos aun </p>
                )}
            </div>
        </nav>

    )
}

export default GrupoPage