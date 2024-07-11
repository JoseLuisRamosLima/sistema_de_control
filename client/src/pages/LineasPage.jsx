
import { useEffect } from "react";
import { useLinea } from "../context/LineasContext";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencilPlus } from "@mdi/js";
import LineaCard from "../components/LineaCard";

function LineaPage() {
    const { getLineas, lineas } =useLinea();

    useEffect(() =>{
        getLineas();
    }, []);
    console.log("DATO 55LINEA ",lineas)
    // if (lineas.length === 0) return (<h1>No se creo Lineas aun </h1>)


    return(
        <nav className=" px-24">
            <Link to='/add-linea'>
                <button className=" px-24">
                    <Icon path={mdiPencilPlus} size={1} ></Icon>
                    Adicionar Lineas
                </button>
            </Link>
        <div className=" grid grid-cols-3 gap-2 px-20 py-10 ">
            {lineas.length > 0 ? (
                lineas.map((linea) => (
                    <LineaCard linea={linea} key={linea.lineaid}/>
                ))
            ) : (
                <p>No se creo lineas aun </p>
            )}
        </div>
        </nav>
        
    );

}

export default LineaPage


{/* <div key={linea.lineaid}>
                        <h1>datos </h1>
                        <h1>{linea.numerolinea}</h1>
                        <p>{linea.color}</p>
                        <p>{linea.ruta}</p>
                        <p>{linea.rutaid}</p>
                    </div> */}