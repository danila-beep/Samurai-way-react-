import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
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
        </div>
    )
}