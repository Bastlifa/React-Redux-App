import React from "react"
import { HeaderDiv, SubHeaderDiv } from './HeaderStyles'
import {useSelector, useDispatch} from 'react-redux'
import {getTrivia} from '../../actions'

const Header = () =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    return (
        <HeaderDiv>
            <h1>Eli's Trivia Challenge!</h1>
            <SubHeaderDiv className="subheader">
                <h3>Score: {`${state.score}/10`}</h3>
                <select>
                    <option value="general">General</option>
                    <option value="general">General</option>
                    <option value="general">General</option>
                    <option value="general">General</option>
                    <option value="general">General</option>
                </select>
                <button onClick={_ => dispatch(getTrivia())}>Start Game</button>
            </SubHeaderDiv>
        </HeaderDiv>
    )
}

export default Header