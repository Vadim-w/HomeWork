import {v1} from "uuid";

export type StateType = {
    id: string,
    name: string,
    age: number
}

export type ActionType = {
    type: string,
    payload: any
}

 export const initialState = [
    {id: v1(), name: "Vasya", age: 18},
    {id: v1(), name: "Kolya", age: 12},
    {id: v1(), name: "Anton", age: 45},
    {id: v1(), name: "Olga", age: 17},
    {id: v1(), name: "Victor", age: 46},
    {id: v1(), name: "John", age: 14}
]

export const hwReducer = (state: Array<StateType> = initialState, action: ActionType): Array<StateType> => {
    switch (action.type) {

        case 'SORT':
            return [
                ...state.sort((a, b) => a.age - b.age)
            ]

        case 'SORT_DOWN':
            return [
                ...state.sort((a, b) => b.age - a.age)
            ]
        case 'CHECK':
            return state.filter(i => i.age >= 18)


        default:
            return state
    }
};

export const sortUpAC = (payload: any) => {
    return {type: "SORT", payload: payload}
}

export const sortDownAC = (payload: any) => {
    return {type: "SORT_DOWN", payload: payload}
}

export const sortMajorityAC = (payload: any) => {
    return {type: "CHECK", payload: payload}
}