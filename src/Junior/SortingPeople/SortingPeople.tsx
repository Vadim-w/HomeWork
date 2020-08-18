import React, {useState} from 'react';
import MyButton from "../../Common/Button/MyButton";
import styles from "./SortingPeople.module.css"
import {
    hwReducer,
    initialState,
    sortDownAC,
    sortMajorityAC,
    sortUpAC,
    StateType
} from "../../homeWorkReducer/HomeWorkReducer";
import {v1} from "uuid";

export const SortingPeople = () => {
    const [users, setUsers] = useState<Array<StateType>>([
        {id: v1(), name: "Vasya", age: 18},
        {id: v1(), name: "Kolya", age: 12},
        {id: v1(), name: "Anton", age: 45},
        {id: v1(), name: "Olga", age: 17},
        {id: v1(), name: "Victor", age: 46},
        {id: v1(), name: "John", age: 14}
        ])


    const sortUp = () => {
        const newState = hwReducer(initialState, sortUpAC("up"))
        setUsers(newState)
    }
    const sortDown = () => {
        const newState = hwReducer(initialState, sortDownAC("down"))
        setUsers(newState)
    }
    const sortCheck = () => {
        const newState = hwReducer(users, sortMajorityAC(18))
        setUsers(newState)
    }

    return (
        <div className={styles.blockSorting}>
            {users.map(i => <div>{i.name + " age: " + i.age}</div>)}
            <MyButton title={"Sort ascending"} onClick={sortUp} styleRed={false}/>
            <MyButton title={"Sort descending"} onClick={sortDown} styleRed={false}/>
            <MyButton title={"Sorting by majority"} onClick={sortCheck} styleRed={false}/>
        </div>
    )
}