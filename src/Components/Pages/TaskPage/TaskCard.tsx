import React, {FunctionComponent} from "react";
import {TaskType} from "../../../CommonTypes/commonTypes";
import {NavLink} from 'react-router-dom'


export const TaskCard: FunctionComponent<{ data: TaskType }> = ({data}) => {
    //устанавливаем появление ->
    const [visibleEditButton, setVisibleEditButton] = React.useState('')

    return (
        <div id={data.id.toString()}
             className={'taskCard'}
             onMouseEnter={() => setVisibleEditButton(data.id.toString())}
             onMouseLeave={() => setVisibleEditButton('')}
        >
            <NavLink to={{pathname: '/editTask', state: data}}>
                <div className={'taskName'}>
                    <h3>{data.name}</h3>
                </div>
                <div className={'taskDate'}>
                    {data.date}
                    {(visibleEditButton === data.id.toString()) ?
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                      fill="#84B61A"/>
                            </svg>
                        </div>
                        : ''}
                </div>
            </NavLink>
        </div>


    )
}