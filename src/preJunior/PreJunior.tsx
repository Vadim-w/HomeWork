import React from 'react';
import Messages from "./Messages/message";
import {Demonstration} from "./Demonstration/Demonstration";
import Affairs from "./Todolist/Affairs";
import {InputField} from "./InputHello/Input";

export const PreJunior = () => {
    return (
        <div>
            <Messages />
            <Demonstration/>
            <Affairs/>
            <InputField/>
        </div>
    )
}

