import React, {useState} from 'react';
import s from './Junior.module.css'
import {EditableSpan} from '../Common/EditableSpan/EditableSpan';
import {TestLocalStorage} from "./TestLocalStorage";
import {Select} from "../Common/Select/Select";

export const Junior = () => {
    let [value, setValue] = useState("text");
    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(true)
    let [valueSelect, setValueSelect] = useState("1")

    const items = [
        {title: "Anna", value: "1"},
        {title: "Andrey", value: "2"},
        {title: "John", value: "3"},
        {title: "Jek", value: "4"},
        {title: "Ivan", value: "5"},
        {title: "Lisa", value: "6"},
        {title: "Lisa", value: "7"}
    ]

    function onChangeValue(value: string) {
        setValue(value)
        setSelectCollapsed(!selectCollapsed)
    }

    function onChangeValueSelect(value: string) {
        setValueSelect(value)
        setSelectCollapsed(!selectCollapsed)
    }
    return (
        <div className={s.title}>
            <h2>Junior</h2>
            <EditableSpan value={value}
                          onChange={onChangeValue}
            />
            <TestLocalStorage/>
            <Select value={valueSelect} items={items} onChange={onChangeValueSelect}/>
        </div>
    )
}