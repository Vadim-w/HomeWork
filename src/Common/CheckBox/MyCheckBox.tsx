import React, {ChangeEvent} from 'react';
import s from './MyCheckBox.module.css'

type myCheckBoxType = {
    checked: boolean
    changeStatus: (checked: boolean) => void
}

const MyCheckBox: React.FC<myCheckBoxType> = (props) => {
    return (
        <label className={s.label}>
            <input type="checkbox"
                   className={s.checkbox}
                   checked={props.checked}
                   onChange={ (e) => props.changeStatus(e.currentTarget.checked)}/>

            <span className={s.fake}></span>
        </label>

    )
}

export default MyCheckBox;