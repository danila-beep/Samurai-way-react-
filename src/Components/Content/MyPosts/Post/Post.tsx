import React from "react";
import s from './Post.module.css'

type PostMessageType = {
    message: string,
    likecount: number,
}

export const Post = (props: PostMessageType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaEHCHQko4Z5JSELjaZXQgckI5T2qXJhqnw&usqp=CAU"
                    alt=""
                />
                <div>{props.message}</div>
                <div>
                    <span>Likes: {props.likecount}</span>
                </div>
            </div>
        </div>
    )
}