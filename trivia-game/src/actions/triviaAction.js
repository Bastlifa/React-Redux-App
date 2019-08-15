import axios from 'axios'
export const FETCH_TRIVIA_START = "FETCH_TRIVIA_START"
export const FETCH_TRIVIA_SUCCESS = "FETCH_TRIVIA_SUCCESS"
export const FETCH_TRIVIA_FAIL = "FETCH_TRIVIA_FAIL"
export const CLICK_TRIVIA_ANSWER = "CLICK_TRIVIA_ANSWER"

export const getTrivia = category => dispatch =>
{
    dispatch({ type: FETCH_TRIVIA_START })
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${category}`)
        .then(res =>
            {
                console.log("a", res.data.results)
                dispatch({ type: FETCH_TRIVIA_SUCCESS, payload: res.data.results })    
            }
        )
        .catch(err => 
            {
                console.log(err)
                dispatch({ type: FETCH_TRIVIA_FAIL, payload: err })
            }
        )
}

export const answerTrivia = (answer) =>
{
    return {
        type: CLICK_TRIVIA_ANSWER,
        payload: answer
    }
}