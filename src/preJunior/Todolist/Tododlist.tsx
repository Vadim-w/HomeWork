import React, {ChangeEvent} from 'react';
import {AffairsType, FilterValuesType} from "./Affairs";
import MyButton from "../../Common/Button/MyButton";
import MyCheckBox from "../../Common/CheckBox/MyCheckBox";


type PropsType = {
    title: string
    tasks: Array<AffairsType>,
    removeTasks: (taskId: number) => void,
    changeFilter: (newFilterValue: FilterValuesType) => void,
    changeStatus: (id: number, p: boolean) => void

}



export function Todolist(props: PropsType ){

    let allClick = () => {props.changeFilter("all")};
    let activeClick = () => {props.changeFilter("active")};
    let completedClick = () => {props.changeFilter("completed")};



    return (
        <div>
            <h3>Affairs</h3>
            <ul>
                {props.tasks.map((t)=>{
                    let deleteClick = () =>{props.removeTasks(t.id)}
                    let changeStatus = (checked: boolean) => {
                        let newCheckBoxValue = checked;
                        props.changeStatus(t.id, newCheckBoxValue)
                    }
                    return (
                        <li key={t.id} className={"liTodo"}>
                            <MyCheckBox checked={t.p} changeStatus={changeStatus}/>

                            <span>{t.title}</span>
                            <MyButton title={"x"} onClick={deleteClick} styleRed={true}/>
                        </li>
                    )
                })}
            </ul>
            <div>
                <MyButton title={"all"} onClick={allClick} styleRed={false}/>
                <MyButton title={"active"} onClick={activeClick} styleRed={false}/>
                <MyButton title={"completed"} onClick={completedClick} styleRed={false}/>
            </div>
        </div>
    )
}