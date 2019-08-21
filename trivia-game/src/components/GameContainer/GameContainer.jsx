import React from "react"
import { useSelector } from 'react-redux'
import AnswerCards from '../AnswerCards/AnswerCards'
import QuestionCard from '../QuestionCard/QuestionCard'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import LandingPage from '../LandingPage/LandingPage'
import GameComplete from '../GameComplete/GameComplete'
import { GameContainerDiv, CenteringDiv } from './GameContainerStyles'

const GameContainer = () =>
{
    const state = useSelector(state => state)

    return (
        <GameContainerDiv>
            <CenteringDiv>
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
            </CenteringDiv>
        </GameContainerDiv>
    )
}

export default GameContainer