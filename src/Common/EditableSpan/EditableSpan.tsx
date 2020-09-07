import React, {KeyboardEvent, useCallback, useState} from 'react';
import MyInput from "../Input/MyInput";

type EditableSpanPropsType = {
    value: string
    onChange: (value: string) => void
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false);

    const activatedEditMode = useCallback(() => {
        setEditMode(true)
    }, [])
    const deActivatedEditMode = useCallback(() => {
        setEditMode(false)
    }, [])
    const onChangeValue = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            deActivatedEditMode()
        }
    }, [])

    return (
        editMode
            ? <MyInput value={props.value}
                       onChange={props.onChange}
                       KeyPress={onChangeValue}
                       error={false}
                       onBlur={deActivatedEditMode}
                       autoFocus/>
            : <span onDoubleClick={activatedEditMode}>{props.value}</span>
    )
})