import React, {useState} from 'react';
import moment from "moment";
import styles from "./Date.module.css"
import MyButton from "../../Common/Button/MyButton";


export const Date = () => {
    let [time, setTime] = useState(moment().format(' HH:mm:ss'))
    let [timerId, setTimerId]= useState<any>(null)
    let [styleHoverDate, setStyleHoverDate] = useState(styles.dateOffHover)

    const startTime = () => {
        timerId = setInterval(() => {
            setTime(moment().format(' HH:mm:ss'))
        }, 1000)
        setTimerId(timerId)
    }
    const stopTime = () => {
        clearInterval(timerId)
    }
    const onHoverDate = () => {
        console.log("lalala")
        setStyleHoverDate(styles.dateOnHover)
    }
    const offHoverDate = () => {
        setStyleHoverDate(styles.dateOffHover)
    }

    return (
        <div className={styles.dateBlock}>
            <span className={styleHoverDate}>{moment().format("MMM Do YY")}</span>
            <span className={styles.timeSpan} onMouseEnter={onHoverDate} onMouseLeave={offHoverDate}>{time}</span>
            <MyButton title={"start"} onClick={startTime} styleRed={false}/>
            <MyButton title={"stop"} onClick={stopTime} styleRed={false}/>
        </div>
    )
}