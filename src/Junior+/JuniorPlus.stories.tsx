import React from 'react';
import {JuniorPlus} from "./JuniorPlus";
import {ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator";


export default {
    title: 'junior+',
    component: JuniorPlus,
    decorators: [ReduxStoreProviderDecorator]
}

export const JuniorPlusBaseExample = (props: any) => {
    return (<JuniorPlus/>)
}


