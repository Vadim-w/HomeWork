import React, {useState} from 'react';
import MyInput from "../Input/MyInput";

 export const EditableSpan = () => {

     let [editMode, setEditMode] = useState<boolean>(false);

     const activatedEditMode = () => {
         setEditMode(true)
     }

     const deActivatedEditMode = () => {
         setEditMode(false)
     }

    return (
        editMode
            ?<MyInput value={"12"}
                      onChange={() => {}}
                      KeyPress={ () => {}}
                      error={false}
                      onBlur={deActivatedEditMode}
                      autoFocus={true}/>
            :<span onDoubleClick={activatedEditMode}>-text-</span>
    )
}