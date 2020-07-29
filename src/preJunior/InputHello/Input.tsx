import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {v1} from "uuid";
import MyInput from "../../Common/Input/MyInput";
import MyButton from "../../Common/Button/MyButton";

type newNames = { id: string, name: string }

export function InputField() {

    let [inputName, setInputName] = useState("");

    let [names, setNames] = useState<Array<newNames>>([])

    let [error, setError] = useState<boolean>(false)

    function addInputName(newName: string) {
        let newInputName = {id: v1(), name: newName};
        let newNames = [newInputName, ...names];
        setNames(newNames)
    }


    function onHelloInputChanged(value: string) {
        setInputName(value);
        setError(false)
    }

    function onHelloInputKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter")
            helloInput();


    }

    function helloInput() {
        if (inputName != "") {
            alert(`hello ${inputName}`);
            setInputName("");
            addInputName(inputName)
        } else {
            setError(true)
            alert("введите текст")
        }
    }



    return (
        <div>
            <MyInput
                value={inputName}
                autoFocus={false}
                onBlur={()=>{}}
                onChange={onHelloInputChanged}
                KeyPress={onHelloInputKeyPressed}
                error={error}/>
            <MyButton title={"hello"} onClick={helloInput} styleRed={false}/>
            <div> Количество пользователей: {names.length} </div>
        </div>
    )
}