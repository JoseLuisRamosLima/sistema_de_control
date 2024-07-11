
import { useEffect, useState } from "react";
import { useLinea } from "../context/LineasContext";
import { useGrupo } from "../context/GrupoContext";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencilPlus } from "@mdi/js";
import ControlCard from "../components/ControlCard";


function ControlPage() {
    const { getGrupos, grupos } = useGrupo();  
    // console.log("ok entrado en linea control page de const ")
    const { getLineas, lineas } = useLinea();
    const [showLineas, setShowLineas] = useState(false);
    const [showGrupos, setShowGrupos] = useState(false);
    const [selectedLinea, setSelectLinea] = useState([]);
    const [selectedGrupo, setSelectGrupo] = useState([]);

    const toggleLineas = () => {
        setShowLineas(!showLineas);
        // setShowGrupos(false);
    }
    const toggleGrupos = () => {
        setShowGrupos(!showGrupos)
        // setShowLineas(false)
    }

    const handleClickLinea = (linea) => {
        setSelectLinea([...selectedLinea, linea]);
    }

    const handleClickGrupo = (grupo) => {
        setSelectGrupo([...selectedGrupo, grupo]);
    }

    const handleRemoveLinea = (index) => {
        const newSelectedLinea = [...selectedLinea];
        newSelectedLinea.splice(index, 1);
        setSelectLinea(newSelectedLinea);
    }

    const handleRemoveGrupo = (index) => {
        const newSelectedGrupo = [...selectedGrupo];
        newSelectedGrupo.splice(index, 1);
        setSelectGrupo(newSelectedGrupo);
    }


    useEffect(() => {
        getLineas();
        getGrupos();
    }, []);

    const getCurrentDate = () =>{
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('es-ES', options);
    }



    // if (lineas.length === 0) return (<h1>No se creo Lineas aun </h1>)

    return (
        <nav className=" px-24">
            <h1>Administracion y Asignacion de grupos y lineas pra hoy: {getCurrentDate()}</h1>
            <div className=" grid grid-cols-2 gap-2 px-5 py-5">

                <div>
                    <button
                        className={`px-4 py-2 mb-4 rounded-lg border-2 ${showLineas ? 'bg-red-500 border-red-500 text-white' : 'bg-blue-500 border-blue-500 text-white'
                            }`}
                        onClick={toggleLineas}>
                        {showLineas ? 'Ocultar Lineas' : 'Seleccionar Linea'}
                    </button>
                    {showLineas && (
                        <div>
                            {lineas.map((linea) => (
                                <div key={linea.lineaid}>
                                    <button onClick={() => handleClickLinea(linea)}>
                                        <p>Linea {linea.numerolinea}</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <button
                        className={`px-4 py-2 mb-4 rounded-lg border-2 ${showGrupos ? 'bg-red-500 border-red-500 text-white' : 'bg-blue-500 border-blue-500 text-white'
                            }`}
                        onClick={toggleGrupos}>
                        {showGrupos ? 'Ocultar Grupo' : 'Seleccionar Grupo'}
                    </button>
                    {showGrupos && (
                        <div>
                            {grupos.map((grupo) => (
                                <div key={grupo.grupoid}>
                                    <button onClick={() => handleClickGrupo(grupo)}>
                                        <p>Grupo {grupo.grupo}</p>
                                    </button>
                                </div>
                            ))
                            }
                        </div>
                    )}
                </div>

            </div>
            <h2 className=" text-center font-bold text-x1 py-4"> Grupos y Lineas asignadas </h2>
            <div className=" grid grid-cols-2 gap-2 px-20 py-10">
                <div>
                    <table className=" min-w-full bg-cyan-950 border">
                        <thead>
                            <tr>
                                <th className=" py-2 px-2 border-b">Linea Seleccionadas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedLinea.map((linea, index) => (
                                <tr key={index} className="hover: bg-cyan-950">
                                    <td className="py-2 px-4 border-b">{linea.numerolinea}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                            onClick={() => handleRemoveLinea(index)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className=" min-w-full bg-cyan-950 border">
                        <thead>
                            <tr>
                                <th className=" py-2 px-4 border-b">Grupos Seleccionados</th>
                            </tr>
                        </thead>
                        <tbody>

                            {selectedGrupo.map((grupo, index) => (
                                <tr key={index} className="hover: bg-cyan-950">
                                    <td className="py-2 px-4 border-b">{grupo.grupo}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                            onClick={() => handleRemoveGrupo(index)}
                                            >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </nav>

    )
}

export default ControlPage