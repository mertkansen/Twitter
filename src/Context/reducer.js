export const initialState = {
    empty: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Something':
            return {
                ...state,
                empty: action.empty // null value for now
            }

        default:
            return state
    }
}

export default reducer