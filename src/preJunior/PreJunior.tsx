import React from "react";
import Messages from "./Messages/message";
import {Demonstration} from "./Demonstration/Demonstration";
import Affairs from "./Todolist/Affairs";
import {InputField} from "./InputHello/Input";
import styles from "./PreJunior.module.css"

export const PreJunior = () => {
    return (
        <div className={styles.container}>
            <Messages/>
            <Demonstration/>
            <Affairs/>
            <InputField/>
        </div>
    )
}

