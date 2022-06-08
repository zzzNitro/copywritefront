import { 
   GET_TEXT,
    } from "./actions"

const initialState = {
   texts: [],
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        
        case GET_TEXT:
            return {
                ...state,
                texts: [...state.texts, payload]
            }

        default:
            return state
    }
}

export default reducer