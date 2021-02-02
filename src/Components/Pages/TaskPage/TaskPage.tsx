import React, {FunctionComponent} from "react";
import {TitleBar} from "../../TitleBar";
import {TaskList} from "./TaskList";
import {AddTaskModal} from "../AddTaskModal/AddTaskModal";
import {useSelector} from "react-redux";
import {initialTasksStateType} from "../../../Redux/reducers/tasks";

export const TaskPage: FunctionComponent = () => {
    const [visibleModal, setVisibleModal] = React.useState(false)
    const handleOpenModal = () => {
        setVisibleModal(!visibleModal)
    }
    const data = useSelector(({tasks}: { tasks: initialTasksStateType }) => {
        return {
            state: tasks
        }
    })
    return (
        <>
            {(visibleModal) && <AddTaskModal handleOpenModal={handleOpenModal} data={data.state.tasks}/>}
            <TitleBar handleOpenModal={handleOpenModal} text={'Заметки'} buttonText={' Добавить заметку'}
                      buttonType={'openModal'}/>
            {(data.state.tasks.length !== 0)
                ? <TaskList data={data.state.tasks}/>
                : <div className={'noTasksMessage'}><p>Заметок нет</p></div>}
        </>
    )
}