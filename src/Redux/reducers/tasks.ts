
import {TaskType} from "../../CommonTypes/commonTypes";



type editTaskType = {
    type: 'TASKS_EDIT_TASK',
    payload: TaskType
}
type deleteTaskType = {
    type: 'TASKS_DELETE_TASK',
    payload: number
}
type addTaskType = {
    type: 'TASKS_ADD_TASK',
    payload: TaskType
}





const initialState  = {
    tasks: [

    ]
}
export type initialTasksStateType = {
    tasks: Array<TaskType>
}
type ActionType =  editTaskType | deleteTaskType | addTaskType

export const tasks = (state: initialTasksStateType = initialState , action: ActionType) => {
    if (action.type === 'TASKS_EDIT_TASK'){
        const newTask : TaskType = action.payload

        return {
            ...state,
            tasks: state.tasks.map(task =>{
                if (task.id === newTask.id){
                    return{
                        ...task,
                        description: newTask.description,
                        date: newTask.date
                    }
                }
                return task
            })
        }
    }
    else if (action.type === 'TASKS_DELETE_TASK'){
        return {
            ...state,
            tasks: state.tasks.filter((task)=> task.id !== action.payload)
        }
    }
    else if (action.type === 'TASKS_ADD_TASK'){
        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    }
    return state
}