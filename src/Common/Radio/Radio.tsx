import React from 'react';
import styles from './Radio.module.css'

type itemType = {
    name: string
    id: string
    value: number
}

type RadioPropsType = {
    items: Array<itemType>
    onChange: (id: string, value: number) => void
    name: string
    value: number
}

export const Radio = React.memo((props: RadioPropsType) => {
    return (
        <div className={styles.block_radio}>
            {props.items.map(i => <div>
                <input type="radio"
                       name={props.name}
                       key={i.id}
                       value={i.value}
                       checked={i.value ===props.value? true : false}
                       onChange={(e) => props.onChange(i.id, i.value)}/> {i.name}
            </div>)}

        </div>
    )
})