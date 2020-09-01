
type initialStateType = {
    loading: boolean
}

type actionType = {
    type: string
    loading: boolean
}

const initialSate = {loading: false}

export const juniorReducer = (state: initialStateType = initialSate, action: actionType) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.loading
            }
        default:
                return state;

    }
}


export const setLoading = (loading: boolean) => {
    return {type: "SET_LOADING", loading}
}