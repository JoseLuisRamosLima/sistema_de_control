
import { useEffect } from "react";
import { useChofer } from "../context/ChoferContext";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencilPlus } from "@mdi/js";
import ChoferCard from "../components/ChoferCard";

function ChoferPage() {
    const { getChofers, chofers } = useChofer();

    useEffect(() => {
        getChofers();
    }, []);
    // if (chofers.length === 0) return (<h1>No se creo choferes aun</h1>)

    return (
        <nav className="px-24">
            <Link to='/add-chofer'>
                <button className=" px-24">
                    <Icon path={mdiPencilPlus} size={1} ></Icon>
                    Adicionar nuevo chofer
                </button>
            </Link>
            <div className=" grid grid-cols-3 gap-2 px-20 py-10 ">
                {chofers.length > 0 ? (
                    chofers.map((chofer) => (
                        <ChoferCard chofer={chofer} key={chofer.choferid} />
                    ))
                ) : (
                    <p>No se creo choferes aun </p>
                )}
            </div>
        </nav>

    )
}

export default ChoferPage