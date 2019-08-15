import React from "react"
import {useSelector} from 'react-redux'
const Entities = require('html-entities').XmlEntities

const QuestionCard = () =>
{
    const entities = new Entities()
    const state = useSelector(state => state)
    console.log('state from QC', state)
    let questionObj = state.trivia[state.currentQuestion]
    console.log('qo', questionObj)
    return (
        <div className="question-card">
            <h3>Category: {entities.decode(questionObj.category)}</h3>
            <h3>Question: {entities.decode(questionObj.question)}</h3>
        </div>
    )
}

export default QuestionCard