import React, {useState} from 'react';
import s from './Junior.module.css'
import {EditableSpan} from '../Common/EditableSpan/EditableSpan';
import {TestLocalStorage} from "./TestLocalStorage";
import {Select} from "../Common/Select/Select";
import {Radio} from "../Common/Radio/Radio";
import {SortingPeople} from "./SortingPeople/SortingPeople";
import {Date} from "./Date/Date";
import {Preloader} from "../Common/Preloader/Preloader";
import MyButton from "../Common/Button/MyButton";

type juniorPropsType = {
    loading: boolean
    setLoading: (loading: boolean) => void
}

export const Junior = (props: juniorPropsType) => {
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
    ]


    function onChangeValue(value: string) {
        setValue(value)
        setSelectCollapsed(!selectCollapsed)
    }

    function onChangeValueSelect(value: string) {
        setValueSelect(value)
        setSelectCollapsed(!selectCollapsed)
    }

    //Radio==============
    const itemsRadio = [
        {name: "Anna", id: "1", value: 1},
        {name: "Andrey", id: "2", value: 2},
        {name: "John", id: "3", value: 3},
        {name: "Jek", id: "4", value: 4},
        {name: "Ivan", id: "5", value: 5},
        {name: "Lisa", id: "6", value: 6},
    ]

    const [valueRadio, setValueRadio] = useState(2)

    const onChangeRadio = (id: string, value: number) => {
        setValueRadio(value)
    }

    const offPreloader = () => {
        props.setLoading(false)
    }

    const onPreloader = () => {
        props.setLoading(true)
        setTimeout(offPreloader, 3000)
    }

    if (props.loading) {
        return (
            <div className={s.preloader}>
                <Preloader/>
            </div>)
    }
    return (
        <div className={s.title}>
            <h2>Junior</h2>
            <EditableSpan value={value}
                          onChange={onChangeValue}
            />
            <TestLocalStorage/>
            <Select value={valueSelect} items={items} onChange={onChangeValueSelect}/>
            <Radio items={itemsRadio} onChange={onChangeRadio} name={"users"} value={valueRadio}/>
            <SortingPeople/>
            <Date/>
            <MyButton title={"setPreloader"} onClick={onPreloader} styleRed={true}/>
        </div>
    )


}

