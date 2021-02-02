import React, {FunctionComponent} from "react";
import {Button} from "./CommonComponents/Button";
import {NavLink} from "react-router-dom";

export const TitleBar: FunctionComponent<{ handleOpenModal?: any, handleEditTask?: any, text: string, buttonType: string, buttonText: string }> = ({handleOpenModal, handleEditTask, text, buttonType, buttonText}) => {

    return (
        <div className={'titleBar'}>
            <h2>{text}</h2>
            {(buttonType === 'openModal')
            && <><Button type={buttonType} method={handleOpenModal} text={buttonText}/></>
            }
            {(buttonType === 'edit')
            && <>
                <NavLink to={'/'}>
                    <div className={'backIcon'}>
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.41 1.41L3.83 7H16V9H3.83L9.41 14.59L8 16L0 8L8 0Z"/>
                        </svg>
                    </div>
                </NavLink>
                <Button type={buttonType} method={handleEditTask} text={buttonText}/>
            </>
            }


        </div>
    )
}