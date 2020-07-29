import React, {useState} from 'react';
import s from './Junior.module.css'
import { EditableSpan } from '../Common/EditableSpan/EditableSpan';

export const Junior = () => {
    return (
        <div className={s.title}>
            <h2>Junior</h2>
            <EditableSpan/>
        </div>
    )
}