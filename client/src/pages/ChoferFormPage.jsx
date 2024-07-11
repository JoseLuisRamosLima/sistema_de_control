import { useForm } from "react-hook-form";
import { useChofer } from "../context/ChoferContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


function ChoferFormPage() {
    const { register, handleSubmit, setValue} = useForm();
    const { createChofer, getChofer, updateChofer } = useChofer();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        async function loadChofer(){
            if(params.choferid){
                const chofer = await getChofer(params.choferid)
                console.log("MOSTRANDO DATOS ", chofer)
                setValue('codchofer', chofer.codchofer )
                setValue('usuarioid', chofer.usuarioid )
                setValue('cantidadauto', chofer.cantidadauto )
            }
        }
        loadChofer()
    },[])

    const onSubmit = handleSubmit((data) =>{
        if(params.choferid){
            // console.log("datos de grupoformpage", choferid)
            updateChofer(params.choferid, data)
        }else{
            createChofer(data);
        }
        navigate('/chofers')
    })
    return(
        <nav className=" flex justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
            <h1 className="text-2xl font-bold flex justify-center">Registro de Choferes</h1>
                <input
                    type="text"
                    placeholder="Codigo de Chofer"
                    {...register("codchofer")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                {/* para el caso de id usuario en chofer va ser opcional el control va ser chofer o o */}          
                <input
                    type="text"
                    placeholder="Id de usuario "
                    {...register("usuarioid")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Cantidad de autos"
                    {...register("cantidadauto")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />             
                
                <button>Insertar</button>
            </form>
        </div>
        </nav>
    )


}
export default ChoferFormPage

