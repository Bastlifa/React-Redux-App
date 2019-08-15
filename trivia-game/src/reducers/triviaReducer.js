import { FETCH_TRIVIA_FAIL, FETCH_TRIVIA_START, FETCH_TRIVIA_SUCCESS } from '../actions'

const initialState =
{
    trivia: [],
    error: "",
    isFetching: false,
    score: 0
}

export const reducer = (state = initialState, action)  =>
{
    console.log("reducer", action)
    switch (action.type) {
        case FETCH_TRIVIA_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_TRIVIA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                trivia: action.payload
            }
        case FETCH_TRIVIA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer
