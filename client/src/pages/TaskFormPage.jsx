
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";



function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTasks();
    console.log(createTask())

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    })




    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Grupo"
                    {...register("grupo")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <textarea rows="3" placeholder="Descripcion"
                    {...register("descripcion")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                ></textarea>
                <input
                    type="text"
                    placeholder="Linea id"
                    {...register("lineaid")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />

                <button>Insertar</button>
            </form>
        </div>
    )
}

export default TaskFormPage