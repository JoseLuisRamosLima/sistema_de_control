import { useForm } from "react-hook-form";
import { useGrupo } from "../context/GrupoContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function GrupoFormPage() {
    const { register, handleSubmit, setValue} = useForm();
    const { createGrupo, getGrupo, updateGrupo } = useGrupo();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        async function loadGrupo(){
            if(params.grupoid){
                console.log("agarrando dato grupo de FORM ", params.grupoid)
                const grupo = await getGrupo(params.grupoid)
                console.log("MOSTRANDO DATOS ", grupo)
                setValue('grupo', grupo.grupo)
                setValue('descripcion', grupo.descripcion)
                setValue('lineaid', grupo.lineaid)
                setValue('lunes', grupo.lunes)
                setValue('martes', grupo.martes)
                setValue('miercoles', grupo.miercoles)
                setValue('jueves', grupo.jueves)
                setValue('viernes', grupo.viernes)
                setValue('sabado', grupo.sabado)
                setValue('domingo', grupo.domingo)

            }
        }
        loadGrupo()
    },[])

    const onSubmit = handleSubmit((data) =>{
        if(params.grupoid){
            // console.log("datos de grupoformpage", grupoid)
            updateGrupo(params.grupoid, data)
        }else{
            createGrupo(data);
        }
        navigate('/grupos')
    })
    return(
        <nav className=" flex justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
            <h1 className="text-2xl font-bold flex justify-center">Registro de Grupos</h1>
                <input
                    type="text"
                    placeholder="Grupo"
                    {...register("grupo")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    {...register("descripcion")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
            <h1 className="text-2xl font-bold flex justify-center">Seleccionar Linea </h1>                
                <input
                    type="text"
                    placeholder=" BUSCAR PARA TAILWIND para lineaid"
                    {...register("lineaid")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia Lunes"
                    {...register("lunes")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia Martes"
                    {...register("martes")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia Miercoles"
                    {...register("miercoles")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia jueves"
                    {...register("jueves")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia viernes"
                    {...register("viernes")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia Sabado"
                    {...register("sabado")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Insertar linea para dia Doming"
                    {...register("domingo")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                
                


                <button>Insertar</button>
            </form>
        </div>
        </nav>
    )


}
export default GrupoFormPage

