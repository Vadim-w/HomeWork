import React, {KeyboardEvent, useState} from 'react';
import MyInput from "../Input/MyInput";

type EditableSpanPropsType = {
    value: string
    onChange: (value: string) => void
    onChangeSpan: () => void
    span: string
}

 export const EditableSpan = (props: EditableSpanPropsType) => {

     let [editMode, setEditMode] = useState<boolean>(false);

     const activatedEditMode = () => {
         setEditMode(true)
     }

     const deActivatedEditMode = () => {
         setEditMode(false)
     }

     const onChangeValue = (e: KeyboardEvent<HTMLInputElement>) => {
         if (e.key === "Enter") {
             props.onChangeSpan()
             deActivatedEditMode()
         }
     }



    return (
        editMode
            ?<MyInput value={props.value}
                      onChange={props.onChange}
                      KeyPress={onChangeValue}
                      error={false}
                      onBlur={deActivatedEditMode}
                      autoFocus={true}/>
            :<span onDoubleClick={activatedEditMode}>{props.span}</span>
    )
}