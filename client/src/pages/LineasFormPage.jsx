import { useForm } from "react-hook-form";
import { useLinea } from "../context/LineasContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function LineaFormPage() {
    const { register, handleSubmit, setValue} = useForm();
    const { createLinea, getLinea, updateLinea } = useLinea();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        async function loadLinea(){
            if(params.lineaid){
                console.log("agarrando dato LINEA FORM ", params.lineaid)
                const linea = await getLinea(params.lineaid)
                console.log("MOSTRANDO DATOS ", linea)
                setValue('numerolinea', linea.numerolinea)
                setValue('color', linea.color)
                setValue('ruta', linea.ruta)
                setValue('rutaid', linea.rutaid)
            }
        }
        loadLinea()
    }, [])

    const onSubmit = handleSubmit((data) =>{
        if(params.lineaid){
            updateLinea(params.lineaid, data)
        }else{
            createLinea(data);
        }
        navigate('/lineas')
    })

    return(
        <nav className=" flex justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
            <h1 className="text-2xl font-bold flex justify-center">Registro de Lineas</h1>
                <input
                    type="text"
                    placeholder="Linea"
                    {...register("numerolinea")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar Color"
                    {...register("color")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
            <h1 className="text-2xl font-bold flex justify-center">Seleccionar ruta </h1>                
                <input
                    type="text"
                    placeholder=" BUSCAR PARA TAILWIND QUE SEA CUADRADO DESPEGABLE "
                    {...register("ruta")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar id de la ruta "
                    {...register("rutaid")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                


                <button>Insertar</button>
            </form>
        </div>
        </nav>
    )


}

export default LineaFormPage




