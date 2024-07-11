import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(); 

  const {signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate("/dasboard")
  }, [isAuthenticated])

  return (
    <div className="flex h-screen items-center justify-center" style={{ backgroundImage: "url('./public/assets/logof1.png')", backgroundSize: "cover", backgroundPosition: "absolute" }}>
      {/* <SectionFullScreen bg="purplePink">         </SectionFullScreen> */}
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

          {
                signinErrors.map((error, i) =>(
                    <div className="bg-red-500 p-2 text-white text-center" key={i}>
                        {error}
                    </div>
                ))
            }
    


        <h1 className="text-2xl font-bold flex justify-center">Iniciar Sesion</h1>

        <form onSubmit={onSubmit}>
          <input type="text"
            {...register("usuario", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="usuario"
          />
          {errors.usuario && (
            <p className="text-red-500">Usuario es requerido</p>
          )}
          <input type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerido</p>
          )}
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full w-full">
              Iniciar
            </button>
          </div>
        </form>

        <div className="flex justify-center">
          <p className="flex gap-x-2 justify-between">
            Aun no tienes cuenta? <Link to={"/Registrar"}
            className="text-sky-500"> Registrate </Link>
          </p>
        </div>


      </div>
    </div>
  )
}

export default LoginPage