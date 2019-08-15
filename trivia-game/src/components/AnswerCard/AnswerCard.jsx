import React from "react"
import { useDispatch } from 'react-redux'
import { answerTrivia } from '../../actions'
const Entities = require('html-entities').XmlEntities

const AnswerCard = (props) =>
{
    const dispatch = useDispatch()
    const entities = new Entities()
    const { answer } = props
    return (
        <div className="answer-card" onClick={_ => dispatch(answerTrivia(answer))}>
            {entities.decode(answer)}
        </div>
    )
}

export default AnswerCard