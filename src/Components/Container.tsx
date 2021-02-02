import React, {FunctionComponent} from "react";
import {TaskPage} from "./Pages/TaskPage/TaskPage";
import {Route} from 'react-router-dom'
import {EditTaskPage} from "./Pages/EditTaskPage/EditTaskPage";


export const Container: FunctionComponent = () => {
    return (
        <div className={'container'}>
            <Route exact path={'/'} render={() => <TaskPage  />}/>
            <Route path={'/editTask'} render={() => <EditTaskPage />} />
        </div>
    )
}