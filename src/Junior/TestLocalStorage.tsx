import React, {useState} from 'react';
import {EditableSpan} from "../Common/EditableSpan/EditableSpan";
import MyButton from "../Common/Button/MyButton";

export function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}



export function TestLocalStorage() {


    let [value, setValue] = useState("");
    let [span, setSpan] = useState("-test-");

    const changeValue = (value: string) => {
        setValue(value);
    }
    const changeSpan = () => {
        setSpan(value)
    }

    const saveValue = () => {
        saveState("span", value)
        setSpan(value)
    }

    const getValue = () => {
        setSpan(restoreState("span", "default"))
    }

    return(
        <div>
            <EditableSpan value={value} onChange={changeValue} onChangeSpan={changeSpan} span={span}/><br/>
            <MyButton title={"Save value"} onClick={saveValue} styleRed={false}/>
            <MyButton title={"Get value"} onClick={getValue} styleRed={false}/>
        </div>
    )
}





