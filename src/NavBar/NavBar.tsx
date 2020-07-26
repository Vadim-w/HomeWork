import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}/>
                <label className={s.btnMenu} htmlFor="hmt">
                    <span className={s.first}></span>
                    <span className={s.second}></span>
                    <span className={s.third}></span>
                </label>
                <div className={s.hiddenMenu}>
                    <div className={s.item}>
                        <NavLink to="/PreJunior" className={s.item} activeClassName={s.active}>PreJunior</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Junior" className={s.item} activeClassName={s.active}>Junior</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Junior+" className={s.item} activeClassName={s.active}>Junior+</NavLink>
                    </div>
                </div>
        </div>


)
}