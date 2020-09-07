import React from 'react';
import {Range} from '../Range/Range';
import styles from './PriceSetting.module.css'

type PriceSettingPropsType = {
    maxPrice: string
    minPrice: string
    setMaxPrice: (value: string) => void
    setMinPrice: (value: string) => void
}

export const PriceSetting = React.memo((props: PriceSettingPropsType) => {
    return (
        <div className={styles.priceSettingBlock}>
            <Range title={"Min price: "} rangeValue={props.minPrice} minValue={0} maxValue={200} setRangeValue={props.setMinPrice}/>
            <Range title={"Max price: "} rangeValue={props.maxPrice} minValue={0} maxValue={200} setRangeValue={props.setMaxPrice}/>
        </div>
    )
})