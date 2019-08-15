import React from "react"
import { useSelector } from 'react-redux'
import AnswerCards from '../AnswerCards/AnswerCards'
import QuestionCard from '../QuestionCard/QuestionCard'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import LandingPage from '../LandingPage/LandingPage'

const GameContainer = () =>
{
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="game-container">
            {state.isFetching ?
            (<LoadingScreen />) :
            (
                state.trivia.length > 0 ?
                (
                    <>
                        <QuestionCard />
                        <AnswerCards />
                    </>
                ) :
                ()
            )
            }
        </div>
    )
}

export default GameContainer