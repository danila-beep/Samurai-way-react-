import React from 'react'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                className={s.headerImg}
                src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                alt=""
            />
        </header>
    )
}