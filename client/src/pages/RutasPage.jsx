import { mdiCashRegister, mdiPencilPlus } from "@mdi/js";

import { useEffect } from "react";
import { useRuta } from "../context/RutaContext";
import RutaCard from "../components/RutaCard";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";

function RutasPage() {
    const { getRutas, rutas } = useRuta();

    useEffect(() => {
        getRutas();
    }, []);
    // si no hay rutas creadas aparecera nada 
    // if (rutas.length === 0) return (<h1>No se creo rutas aun </h1>)



    return (
        <nav className=" px-10">
            <Link to='/add-ruta'>
            <button className=" px-24">
                <Icon path={mdiPencilPlus} size={1 }></Icon>
                Adicionar Rutas
            </button>
            </Link>
        <div className=" grid grid-cols-3 gap-2 px-20 py-10">
            {rutas.length > 0 ? (
                rutas.map((ruta) => (
                    <RutaCard ruta={ruta} key={ruta.rutaid} />
                ))
            ) : (
                <p>No se creo rutas. </p>
            )}
        </div>
        </nav>
    );
}

export default RutasPage;
