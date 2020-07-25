import React from 'react';
import MyButton from "../Common/Button/MyButton";
import MyCheckBox from "../Common/CheckBox/MyCheckBox";
import MyInput from "../Common/Input/MyInput";

export const Demonstration = () => {
    return (
        <div className={"demonstration"}>
            <MyButton title={"demonstration"} onClick={() => {} } styleRed={false}/>
            <MyCheckBox checked={true} changeStatus={ () => {} }/>
            <MyInput value={"demonstration"} KeyPress={ (e) => { }  } onChange={ () => {} } error={false}/>
        </div>
    )
}
