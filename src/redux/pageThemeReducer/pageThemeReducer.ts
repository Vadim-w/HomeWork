

type initialStateType = {
    theme: string
}

let initialState = {
    theme: "Blue"
}

type actionsTypes = setPageThemeActionType

export const pageThemeReducer = (state: initialStateType = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case "SET_PAGE_THEME":
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state

    }
}


type setPageThemeActionType = {
    type: "SET_PAGE_THEME",
    theme: string
}

export const setPageThemeAC = (theme: string): setPageThemeActionType => {
    return { type: "SET_PAGE_THEME", theme}
}