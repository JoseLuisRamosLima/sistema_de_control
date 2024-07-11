
import { createContext, useContext, useState} from "react";
import { createGrupos } from "../api/grupo";



const TaskContext = createContext();

export const useTasks = () =>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}

export function TaskProvider({ children }){
    const [tasks, setTasks] = useState([]);
    
    const createTask = async(task) =>{
        console.log("capturando ok en task context")
        console.log("capturando datos de taskcontext ", task)
        const res = await createGrupos(task)
        console.log('enviando datos de tasks context')
        console.log(res)
    }

    return(
        <TaskContext.Provider 
        value={{
                tasks,
                createTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )

}

