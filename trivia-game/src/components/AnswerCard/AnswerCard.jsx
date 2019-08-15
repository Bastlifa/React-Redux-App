import React from "react"
import { useDispatch } from 'react-redux'
const Entities = require('html-entities').XmlEntities

const AnswerCard = (props) =>
{
    const entities = new Entities()
    const { answer } = props
    return (
        <div className="answer-card">
            {entities.decode(answer)}
        </div>
    )
}

export default AnswerCard