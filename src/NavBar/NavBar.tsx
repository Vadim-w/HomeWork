import React from 'react';
import s from './NavBar.module.css'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <div className={s.item}>
                <Link to="/PreJunior">PreJunior</Link>
            </div>
            <div className={s.item}>
                <Link to="/Junior">Junior</Link>
            </div>
            <div className={s.item}>
                <Link to="/Junior+">Junior+</Link>
            </div>
        </div>
    )
}