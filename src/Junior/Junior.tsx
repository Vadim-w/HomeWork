import React, {useState} from 'react';
import s from './Junior.module.css'
import {EditableSpan} from '../Common/EditableSpan/EditableSpan';
import {TestLocalStorage} from "./TestLocalStorage";

export const Junior = () => {
    let [value, setValue] = useState("text");

    function onChangeValue(value: string) {
        setValue(value);
    }
    return (
        <div className={s.title}>
            <h2>Junior</h2>
            <EditableSpan value={value}
                          onChange={onChangeValue}
            />
            <TestLocalStorage/>
        </div>
    )
}