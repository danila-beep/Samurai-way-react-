import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogItemPropsType = {
    name: string,
    id: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.messageItem}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogsOuter}>
            <div className={s.dialogsItems}>
                <DialogItem name="Danila" id="1"/>
                <DialogItem name="Vasya" id="2"/>
                <DialogItem name="Ivan" id="3"/>
                <DialogItem name="Kolya" id="4"/>
            </div>

            <div className={s.messages}>
                <Message message={"Hi"} />
                <Message message={"Howdy"} />
                <Message message={"Yep"} />
            </div>
        </div>
    )
}