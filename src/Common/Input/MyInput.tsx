import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyInput.module.css'

type inputPropsType = {
    value: string
    onChange: (value: string) => void
    KeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    error: boolean
    autoFocus: boolean
    onBlur: () => void

}

const MyInput: React.FC<inputPropsType> = (props) => {

    return(
        <div className={"myInput"}>
            <input
                autoFocus={props.autoFocus}
                onBlur={props.onBlur}
                className={props.error? s.inputError : s.input}
                type= "text"
                value={props.value}
                onChange={(e) => props.onChange(e.currentTarget.value)}
                onKeyPress={props.KeyPress}/>
        </div>
    )
}

export default MyInput;