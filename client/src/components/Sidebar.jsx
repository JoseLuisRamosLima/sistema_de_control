
import React from "react";
import {
    mdiLogout, mdiHome, mdiRoutes, mdiSortNumericVariant, mdiCarMultiple, mdiFileAccount, mdiAccountMultiple, mdiGroup, mdiAccountMultipleMinusOutline, mdiAccountMultipleCheck, mdiAccountMultiplePlus, mdiControllerClassic, mdiController, mdiCommentRemoveOutline, mdiCalendarSync
} from '@mdi/js'

import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar({ sidebarToggle }) {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav>
            {isAuthenticated ? (
                <>
                    <div className={`${sidebarToggle ? " hidden" : " block"}w-64 bg-gray-800 fixed h-full px-12 py-2`}>
                        <div className=" my-2 mb-4 ">
                            <h1 className=" text-2xl text-white font-bold">Menu</h1>
                        </div>
                        <hr />
                        <ul>
                            <Link to='/dasboard'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiHome} size={1} />
                                    Inicio
                                </li>
                            </Link>
                            {/* <Link >
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiAccountMultiplePlus} size={1} />
                                    Administrar Usuarios
                                </li>
                            </Link> */}
                            <Link to='/rutas'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiRoutes} size={1} />
                                    Administrar Rutas
                                </li>
                            </Link>
                            <Link to='/lineas'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiSortNumericVariant} size={1} />
                                    Administrar Lineas
                                </li>
                            </Link>

                            <Link to='/grupos'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiGroup} size={1} />
                                    Administrar Grupos
                                </li>
                            </Link>

                            <Link to='/chofers'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiAccountMultiple} size={1} />
                                    Administrar Choferes
                                </li>
                            </Link>

                            <Link to='/vehiculos'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiCarMultiple} size={1} />
                                    Administrar Vehiculos
                                </li>
                            </Link>

                            <Link to='/controles'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiCalendarSync} size={1} />
                                    Control Diario
                                </li>
                            </Link>

                            <Link to='/pdf'>
                                <li className=" mb-2 rounded hover:shadow hover:bg-blue-500">
                                    <Icon path={mdiFileAccount} size={1} />
                                    Generar Reportes
                                </li>
                            </Link>

                            <Link>
                                <li className=" mb-2 rounded hover:shadow hover:bg-red-800"
                                    onClick={() => { logout(); }}>
                                    <Icon path={mdiLogout} size={1} />
                                    Salir
                                </li>
                            </Link>
                        </ul>
                    </div>

                </>
            ) : (
                <>

                </>
            )
            }
        </nav>
    )


}

export default Sidebar;


// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";


// function Sidebar() {
//     const { isAuthenticated, logout, user } = useAuth();

//     if(!isAuthenticated) return null;


//     return (

//         <nav className="bg-zinc-700 h-full w-60 flex flex-col py-5 px-3 rounded-r-lg">
//             <h1 className="text-2xl font-bold">Administracion y Control de Rutas</h1>
//             <ul className=" space-y-2">
//                         <li>
//                             Bienvenido {user.usuario}
//                         </li>
//                         <li>
//                             <Link to='/add-ruta'>agregar rutas </Link>
//                         </li>
//                         <li>
//                             <Link to='/' onClick={() => {
//                                 logout();
//                             }}>Salir</Link>
//                         </li>
//             </ul>
//         </nav>
//     )
// }
// export default Sidebar
