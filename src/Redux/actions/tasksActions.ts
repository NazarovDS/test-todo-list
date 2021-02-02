import {TaskType} from "../../CommonTypes/commonTypes";

export const deleteTask = (taskId: number) => ({
    type: 'TASKS_DELETE_TASK',
    payload: taskId
})

export const editTask = (newTask : TaskType) => ({
    type: 'TASKS_EDIT_TASK',
    payload: newTask
})
export const addTask = (newTask : TaskType) => ({
    type: 'TASKS_ADD_TASK',
    payload: newTask
})

