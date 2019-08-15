import React from "react"
import { useDispatch } from 'react-redux'
import { answerTrivia } from '../../actions'
import { AnswerCardDiv } from './AnswerCardStyles'
const Entities = require('html-entities').XmlEntities

const AnswerCard = (props) =>
{
    const dispatch = useDispatch()
    const entities = new Entities()
    const { answer } = props
    return (
        <AnswerCardDiv onClick={_ => dispatch(answerTrivia(answer))}>
            <h3>{entities.decode(answer)}</h3>
        </AnswerCardDiv>
    )
}

export default AnswerCard