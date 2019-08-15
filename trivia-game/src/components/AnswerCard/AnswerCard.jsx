import React from "react"
import { useDispatch } from 'react-redux'
import { answerTrivia } from '../../actions'
import { AnswerCardDiv } from './AnswerCardStyles'
const he = require("he")
const AnswerCard = (props) =>
{
    const dispatch = useDispatch()
    const { answer } = props
    return (
        <AnswerCardDiv onClick={_ => dispatch(answerTrivia(answer))}>
            <h3>{he.decode(answer)}</h3>
        </AnswerCardDiv>
    )
}

export default AnswerCard