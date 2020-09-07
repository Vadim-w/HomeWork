
type initialStateType = {
    loading: boolean
    rangeValue: string
    maxPrice: string
    minPrice: string
}

const initialSate = {
    loading: false,
    rangeValue: "10",
    minPrice: "0",
    maxPrice: "0"
}

type ActionsTypes = setLoadingActionType | setRangeValueActionType | setMaxPriceActionType | setMinPriceActionType

export const juniorReducer = (state: initialStateType = initialSate, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.loading
            }
        case "SET_RANGE_VALUE":
            return {
                ...state,
                rangeValue: action.value
            }
        case "SET_MIN_PRICE":
            return {
                ...state,
                minPrice: action.value
            }
        case "SET_MAX_PRICE":
            return {
                ...state,
                maxPrice: action.value
            }
        default:
                return state;

    }
}


type setLoadingActionType = {
    type: "SET_LOADING"
    loading: boolean
}

export const setLoading = (loading: boolean): setLoadingActionType => {
    return {type: "SET_LOADING", loading}
}

type setRangeValueActionType = {
    type: "SET_RANGE_VALUE"
    value: string
}

export const setRangeValue = (value: string): setRangeValueActionType => {
    return {type: "SET_RANGE_VALUE", value}
}

type setMaxPriceActionType = {
    type: "SET_MAX_PRICE"
    value: string
}

export const setMaxPrice = (value: string): setMaxPriceActionType => {
    return {type: "SET_MAX_PRICE", value}
}

type setMinPriceActionType = {
    type: "SET_MIN_PRICE"
    value: string
}

export const setMinPrice = (value: string): setMinPriceActionType => {
    return {type: "SET_MIN_PRICE", value}
}