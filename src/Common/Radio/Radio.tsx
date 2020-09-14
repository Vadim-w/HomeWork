import React from 'react';
import styles from './Radio.module.css'

type itemType = {
    name: string
    id: string
    value: string
}

type RadioPropsType = {
    items: Array<itemType>
    onChange: ( value: string) => void
    name: string
    value: string
}

export const Radio = React.memo((props: RadioPropsType) => {
    return (
        <div className={styles.block_radio}>
            <h3>{props.name}</h3>
            {props.items.map(i => <div>
                <input type="radio"
                       name={props.name}
                       key={i.id}
                       value={i.value}
                       checked={i.value ===props.value? true : false}
                       onChange={(e) => props.onChange( i.value)}/> {i.name}
            </div>)}

        </div>
    )
})