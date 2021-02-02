import React, {FunctionComponent} from "react";
import {useLocation} from 'react-router-dom'
import {TitleBar} from "../../TitleBar";
import {useDispatch} from "react-redux";
import {deleteTask, editTask} from "../../../Redux/actions/tasksActions";
import {useHistory} from "react-router-dom"
import {TaskType} from "../../../CommonTypes/commonTypes";
import {getDate} from "../../../Utilits/getDate";

export const EditTaskPage: FunctionComponent = () => {
    let history = useHistory()
    let location: any = useLocation()
    const [newTaskDescription, setNewTaskDescription] = React.useState(location.state.description)
    const dispatch = useDispatch()

    //тянем дату
    const today = getDate()
    //Собираем объект для передачи в стейт
    const newTask: TaskType = {
        id: location.state.id,
        name: location.state.name,
        description: newTaskDescription,
        date: today
    }
    const handleDeleteTask  = () : void => {
        dispatch(deleteTask(newTask.id))
        history.push('/')
    }
    //правим таску
    const handleEditTask  = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        e.preventDefault()
        dispatch(editTask(newTask))
        history.push('/')
    }


    return (
        <div className={'editTaskPage'}>
            <TitleBar handleEditTask={handleEditTask} text={location.state.name} buttonType={'edit'}
                      buttonText={' Править заметку'}/>
            <textarea className={'editTaskDescription'} placeholder={'Комментарий к заметке'}
                      defaultValue={newTaskDescription} onChange={(e) => {
                setNewTaskDescription(e.target.value)
            }}/>
            <div className={'editTaskDate'}>
                <p>{location.state.date}</p>
                <div >
                    <svg onClick={handleDeleteTask} id={'trashIcon'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM16 9V19H8V9H16ZM6 7H18V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V7Z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}