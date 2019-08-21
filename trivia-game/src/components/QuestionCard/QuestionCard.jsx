import React from "react"
import {useSelector} from 'react-redux'
import { QuestionCardDiv } from './QuestionCardStyles'
const he = require("he")

const QuestionCard = () =>
{
    const state = useSelector(state => state)
    let questionObj = state.trivia[state.currentQuestion]
    return (
        <QuestionCardDiv>
            <h3>Category: {he.decode(questionObj.category)}</h3>
            <h3>Question: {he.decode(questionObj.question)}</h3>
        </QuestionCardDiv>
    )
}