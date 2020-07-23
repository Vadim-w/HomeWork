import React from 'react';
import s from "./MyButton.module.css"

 type typeMyButton = {
    title: string
     onClick: () => void
     styleRed: boolean
}



const MyButton:React.FC<typeMyButton> = (props) => {
    return (
            <button onClick={props.onClick} className={props.styleRed? s.buttonRed : s.button}>{props.title}</button>
    )
}

export default MyButton;