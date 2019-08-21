import React from "react"
import AnswerCard from '../AnswerCard/AnswerCard'
import { useSelector } from 'react-redux'


const AnswerCards = () =>
{
    const question = useSelector(state => state.trivia[state.currentQuestion])
    const aAnswers = [...question.incorrect_answers, question.correct_answer]
        .sort(function() { return 0.5 - Math.random() })
    return (
        <div>
            {aAnswers.map(el => <AnswerCard key={el} answer={el} />)}
        </div>
    )
}

export default AnswerCards