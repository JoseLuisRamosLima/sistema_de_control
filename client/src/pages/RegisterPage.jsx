
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);


    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
    });



    return (
        <div className="bg-zinc-800 max-w-md rounded-md">
            {
                registerErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white" key={i}>
                        {error}
                    </div>
                ))
            }

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
                <input type="type"
                    {...register("cargo", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="cargo"
                />
                {errors.cargo && (
                    <p className="text-red-500">Cargo es requerido</p>
                )}
                {/* <input type="type"
                    {...register("personaid", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="id de persona"
                />
                {errors.personaid && (
                    <p className="text-red-500">Id de persona es requerido</p>
                )} */}
                <button type="submit" className="text-white text-lg font-bold w-full bg-blue-500 px-4 py-2 rounded-md my-2">
                    Registrar
                </button>

            </form>
            <p className="flex gap-x-2 justify-between">
                Ya tienes cuenta ? <Link to={"/Login"}
                    className="text-sky-500"> Inicio Sesion </Link>
            </p>


        </div>
    )
}

export default RegisterPage