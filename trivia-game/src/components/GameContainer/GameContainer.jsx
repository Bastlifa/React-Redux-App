import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import AnswerCards from '../AnswerCards/AnswerCards'
import QuestionCard from '../QuestionCard/QuestionCard'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import LandingPage from '../LandingPage/LandingPage'
import GameComplete from '../GameComplete/GameComplete'

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
                    state.isFinished ?
                    (<GameComplete />) :
                    (
                        <>
                            <QuestionCard />
                            <AnswerCards />
                        </>
                    )
                ) :
                (<LandingPage />)
            )
            }
        </div>
    )
}

export default GameContainer