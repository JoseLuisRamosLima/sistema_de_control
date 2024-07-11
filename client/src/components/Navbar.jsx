import {
    mdiAccountCircle,
    mdiLogout, mdiSelectSearch, mdiViewList
} from '@mdi/js'
import Icon from "@mdi/react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar({ sidebarToggle, setSidebarToggle }) {
    const { isAuthenticated, user, logout } = useAuth();
    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    };


    return (
        <nav>
            {isAuthenticated ? (
                <>
                    <div className=" bg-gray-800 px-4 py-4 flex justify-between ml-64">
                        <div className=" flex items-center text-xl cursor-pointer "
                            onClick={toggleSidebar} >
                            <Icon path={mdiViewList} size={1} />
                            <span className=" text-white font-semibold">Bienvenido {user.usuario}</span>
                        </div>
                        <div className=' text-white'></div>
                        <div className=' relative'>
                            <button className=' text-white group'>
                                <Icon path={mdiAccountCircle} size={1} className=' mr-10' />
                                <div className=' z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                                    <ul className=' py-2 text-sm text-black'>
                                        <li>
                                            <Link to='/profile'>
                                                Datos
                                            </Link>
                                        </li>
                                        <li onClick={() => { logout(); }}>Salir</li>
                                    </ul>
                                </div>
                            </button>
                        </div>
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

export default Navbar
// <nav className="bg-zinc-700 w-full flex justify-between py-5 px-10 rounded-lg">
//     <h1 className="text-2xl font-bold">Administracion y Control de Rutas</h1>
//     <ul className="flex gap-x-2">
//         {isAuthenticated ? (
//             <>
//                 <li>
//                     Bienvenido {user.usuario}
//                 </li>
//                 {/* <li>
//                     <Link to='/add-ruta'>agregar rutas </Link>
//                 </li> */}
//                 <li>
//                     <Link to='/' onClick={() => {
//                         logout();
//                     }}>
//                         <Icon path={mdiLogout} size={1}/>
//                     </Link>
//                 </li>
//             </>
//         ) : (
//             <>
//                 <li>
//                     <Link to='/login'>Login</Link>
//                 </li>
//                 <li>
//                     <Link to='/registrar'>Register</Link>
//                 </li>
//             </>
//         )}

//     </ul>
// </nav>



// <div className=" bg-gray-800 px-4 py-3 flex justify-between ml-64">
// <div className=" flex items-center text-xl cursor-pointer "
//     onClick={toggleSidebar} >
//     <Icon path={mdiViewList} size={1} />
//     <span className=" text-white font-semibold">Panel Principal</span>
// </div>
// <div className=' text-white'></div>
// <div className=' relative'>
//     <button className=' text-white group'>
//         <Icon path={mdiAccountCircle} size={1} className=' mr-10' />
//         {/* <span className=' absolute full ml-2 top-1/2 transform -translate-y-1/2'> 
// HOLA USUARIO 
// </span> */}
//         <div className=' z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
//             <ul className=' py-2 text-sm text-black'>
//                 <li>Datos</li>
//                 <li>Salir </li>
//             </ul>
//         </div>
//     </button>
// </div>
// </div>