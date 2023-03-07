import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={s.itemMyPosts}>
                <h3>My posts</h3>
                <textarea placeholder="your news..."></textarea>
                <button>Send</button>
            </div>

        <div className={s.posts}>
            <Post message="Hi, how are you" likecount={2}/>
            <Post message="Its my first post" likecount={15}/>
        </div>

        </div>
    )
}