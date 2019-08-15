import { FETCH_TRIVIA_FAIL, FETCH_TRIVIA_START, FETCH_TRIVIA_SUCCESS, CLICK_TRIVIA_ANSWER } from '../actions'

const initialState =
{
    trivia: [],
    error: "",
    isFetching: false,
    score: 0,
    currentQuestion: 0,
    isFinished: false
}

export const reducer = (state = initialState, action)  =>
{
    switch (action.type) {
        case FETCH_TRIVIA_START:
            return {
                ...state,
                isFetching: true,
                error: "",
                isFinished: false,
                currentQuestion: 0,
                score: 0
            }
        case FETCH_TRIVIA_SUCCESS:
            return {
                ...state,
                trivia: action.payload,
                isFetching: false,
            }
        case FETCH_TRIVIA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLICK_TRIVIA_ANSWER:
            const isCorrect = action.payload === state.trivia[state.currentQuestion].correct_answer
            return {
                ...state,
                score: isCorrect ? state.score + 1 : state.score,
                isFinished: state.currentQuestion < 9 ? false : true,
                currentQuestion: state.currentQuestion + 1
            }
        default:
            return state
    }
}

export default reducer
