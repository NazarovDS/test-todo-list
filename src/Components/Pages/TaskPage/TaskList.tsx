import React, {FunctionComponent} from "react";
import {TaskCard} from "./TaskCard";
import {TaskType} from "../../../CommonTypes/commonTypes";



export const TaskList: FunctionComponent<{data : Array<TaskType>}>  = ({data}) => {
    return(
        <>
            {data &&
                <div className={'taskList'}>
                    {data.map((task: TaskType) => <TaskCard key={task.id} data={task}/> )}
                </div>
            }

            </>
    )
}