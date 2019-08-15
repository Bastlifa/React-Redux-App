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
            <h3>{entities.decode(answer)}</h3>
        </div>
    )
}

export default AnswerCard