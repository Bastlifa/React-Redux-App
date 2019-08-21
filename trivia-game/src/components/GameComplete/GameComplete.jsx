import React from "react"
import { useSelector } from 'react-redux'

const GameComplete = () =>
{
    const state = useSelector(state => state)
    return (
        <div className="game-complete">
            <h2>Game Over</h2>
            <h2>Score: {`${state.score}/10`}</h2>
        </div>
    )
}

export default GameComplete