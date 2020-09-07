import React, {ChangeEvent, useCallback} from 'react';
import styles from './Range.module.css'

type RangePropsType = {
    rangeValue: string
    minValue: number
    maxValue: number
    setRangeValue: (value: string) => void
    title: string
}

export const Range = React.memo((props: RangePropsType) => {

    const onChangeRangeValue = useCallback((value: string) => {
        props.setRangeValue(value)
    }, [])

    return (
        <div className={styles.range}>
            <span>{props.title} {props.rangeValue} </span>
            <input
                min={props.minValue}
                max={props.maxValue}
                value={props.rangeValue}
                onChange={ (event: ChangeEvent<HTMLInputElement>) => onChangeRangeValue(event.currentTarget.value)}
                type="range"
            />
        </div>
    )
})