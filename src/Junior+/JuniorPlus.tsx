import React from 'react';
import styles from './JuniorPlus.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {Radio} from "../Common/Radio/Radio";
import {setPageThemeAC} from "../redux/pageThemeReducer/pageThemeReducer";
import {Request} from "./Request/Request";

export const JuniorPlus = () => {
    let theme = useSelector<RootState, string>( (state) => state.pageTheme.theme)
    let dispatch = useDispatch()
    let items = [
        {name: "Green", id: "1", value: "Green"},
        {name: "Blue", id: "2", value: "Blue"},
        {name: "Red", id: "3", value: "Red"}
    ]

    const changePageTheme = (theme: string) => {
        debugger
        dispatch(setPageThemeAC(theme))
    }
    const style = () => {
        if (theme === "Red") {
            return styles.JuniorPlusRed
        }
        else if (theme === "Green") {
            return styles.JuniorPlusGreen
        }
        else  {
            return styles.JuniorPlusBlue
        }
    }

   /* document.body.style.backgroundColor = style()*/

    return (
        <div className={style()}>
            <h2 className={styles.titleJunior}>Junior+</h2>
            <div className={styles.themeBlock}>
                <Radio items={items} onChange={changePageTheme} name={"Theme"} value={theme}/>
            </div>
            <Request/>
        </div>
    )
}
