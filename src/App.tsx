import React from 'react';
import './App.css';
import Messages from "./Messages/message";
import Affairs from "./Todolist/Affairs";
import { InputField } from './InputHello/Input';
import MyButton from "./Common/Button/MyButton";
import MyCheckBox from './Common/CheckBox/MyCheckBox';
import MyInput from './Common/Input/MyInput';

const App = () => {
  return (
    <div className="App">
      <Tasks />
      <Affairs/>
      <InputField/>
    </div>
  );
}


const Demonstration = () => {
    return (
        <div className={"demonstration"}>
            <MyButton title={"demonstration"} onClick={() => {} } styleRed={false}/>
            <MyCheckBox checked={true} changeStatus={ () => {} }/>
            <MyInput value={"demonstration"} KeyPress={ (e) => { }  } onChange={ () => {} } error={false}/>
        </div>
    )
}




function Tasks() {
  return (
    <div>
        < Messages/>
        <Demonstration/>
    </div>
  );
}


export default App;
