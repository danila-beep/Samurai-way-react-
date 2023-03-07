import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <img
                className={s.contentHeaderPhoto}
                src="https://a-static.besthdwallpaper.com/nurse-cap-and-stethoscope-minimalist-black-wallpaper-3840x1280-96609_105.jpg"
                alt=""
            />

            <div className={s.avaItem}>
                <img
                    className={s.avaImg}
                    src="https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png"
                    alt=""
                />
                <div className={s.avaText}>
                    <h3>Danila</h3>
                    <hr/>
                    <div>E-Mail:</div>
                </div>
            </div>

            <MyPosts />

        </div>
    )
}