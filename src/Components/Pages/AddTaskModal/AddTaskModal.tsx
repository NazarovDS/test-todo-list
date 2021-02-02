import React, {FunctionComponent} from "react";
import {getDate} from "../../../Utilits/getDate";
import {useDispatch} from "react-redux";
import {addTask} from "../../../Redux/actions/tasksActions";
import {TaskType} from "../../../CommonTypes/commonTypes";

export const AddTaskModal : FunctionComponent<{handleOpenModal: any ,data: Array<TaskType>}> = ({handleOpenModal, data}) =>{
    const dispatch = useDispatch()
    //тянем данные
    const [taskName, setTaskName] = React.useState('')
    const [taskDescription, setTaskDescription] = React.useState('')
    const today = getDate()
    //эмулирую id с бека
    const id = data.length + 1




    const handleAddTask = () : void =>{
        dispatch(addTask({
            id: id,
            name: taskName,
            description: taskDescription,
            date: today
        }))
        handleOpenModal()
    }


    return(
        <div className={'addTaskModalPage'}>
            <div className={'addTaskModalWindow'}>
                <div className={'closeWindow'}>
                    <svg width="14" height="14" viewBox="0 0 14 14"  xmlns="http://www.w3.org/2000/svg" onClick={handleOpenModal}>
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                    </svg>
                </div>
                <div className={'heading'}>
                    <h2>Добавить заметку</h2>
                </div>
                <div className={'buttonGroup'}>
                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.225 11.79C16.195 11.12 16.875 10.02 16.875 9C16.875 6.74 15.125 5 12.875 5H6.625V19H13.665C15.755 19 17.375 17.3 17.375 15.21C17.375 13.69 16.515 12.39 15.225 11.79ZM9.625 7.5H12.625C13.455 7.5 14.125 8.17 14.125 9C14.125 9.83 13.455 10.5 12.625 10.5H9.625V7.5ZM9.625 16.5H13.125C13.955 16.5 14.625 15.83 14.625 15C14.625 14.17 13.955 13.5 13.125 13.5H9.625V16.5Z" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5V8H12.21L8.79 16H6V19H14V16H11.79L15.21 8H18V5H10Z"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 11C18 14.31 15.31 17 12 17C8.69 17 6 14.31 6 11V3H8.5V11C8.5 12.93 10.07 14.5 12 14.5C13.93 14.5 15.5 12.93 15.5 11V3H18V11ZM5 21V19H19V21H5Z" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 8H3.5V5H2.5V4H4.5V8ZM4.5 17.5V17H2.5V16H5.5V20H2.5V19H4.5V18.5H3.5V17.5H4.5ZM2.5 11H4.3L2.5 13.1V14H5.5V13H3.7L5.5 10.9V10H2.5V11ZM7.5 7V5H21.5V7H7.5ZM7.5 19H21.5V17H7.5V19ZM21.5 13H7.5V11H21.5V13Z" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.75 6C2.75 5.17 3.42 4.5 4.25 4.5C5.08 4.5 5.75 5.17 5.75 6C5.75 6.83 5.08 7.5 4.25 7.5C3.42 7.5 2.75 6.83 2.75 6ZM2.75 12C2.75 11.17 3.42 10.5 4.25 10.5C5.08 10.5 5.75 11.17 5.75 12C5.75 12.83 5.08 13.5 4.25 13.5C3.42 13.5 2.75 12.83 2.75 12ZM4.25 16.5C3.42 16.5 2.75 17.18 2.75 18C2.75 18.82 3.43 19.5 4.25 19.5C5.07 19.5 5.75 18.82 5.75 18C5.75 17.18 5.08 16.5 4.25 16.5ZM21.25 19H7.25V17H21.25V19ZM7.25 13H21.25V11H7.25V13ZM7.25 7V5H21.25V7H7.25Z" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V2L7 7L12 12V8C15.31 8 18 10.69 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14H4C4 18.42 7.58 22 12 22C16.42 22 20 18.42 20 14C20 9.58 16.42 6 12 6Z"/>
                    </svg>
                </div>
                <form className={'inputForms'} onSubmit={handleAddTask}>
                    <label htmlFor="taskName">Название заметки</label>
                    <input id={'taskName'} required={true} value={taskName} placeholder={'Введите название заметки'} onChange={(e)=>{setTaskName(e.target.value)}} type="text"/>
                    <label htmlFor="taskDescription">Комментарий</label>
                    <textarea value={taskDescription} placeholder={'Введите комментарий'} onChange={(e)=>{setTaskDescription(e.target.value)}} id={'taskDescription'}/>

                    <button className={'button addTaskInState'} >Добавить</button>
                </form>
            </div>
        </div>
    )
}