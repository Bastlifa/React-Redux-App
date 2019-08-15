import axios from 'axios'
export const FETCH_TRIVIA_START = "FETCH_TRIVIA_START"
export const FETCH_TRIVIA_SUCCESS = "FETCH_TRIVIA_SUCCESS"
export const FETCH_TRIVIA_FAIL = "FETCH_TRIVIA_FAIL"

export const getTrivia = _ => dispatch =>
{
    dispatch({ type: FETCH_TRIVIA_START })
    axios
        .get('https://opentdb.com/api.php?amount=10')
        .then(res =>
            dispatch({ type: FETCH_TRIVIA_SUCCESS, payload: res.results })    
        )
        .catch(err => dispatch({ type: FETCH_TRIVIA_FAIL, payload: err }))
}