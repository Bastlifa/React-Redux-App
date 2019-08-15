import React, {useState} from "react"
import { HeaderDiv, SubHeaderDiv } from './HeaderStyles'
import {useSelector, useDispatch} from 'react-redux'
import {getTrivia} from '../../actions'

const Header = () =>
{
    const [category, setCategory] = useState("")
    const handleSelect = e =>
    {
        setCategory(e.target.value)
        console.log(category)
    }
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    return (
        <HeaderDiv>
            <h1>Eli's Trivia Challenge!</h1>
            <SubHeaderDiv className="subheader">
                <h3>Score: {`${state.score}/10`}</h3>
                <select onChange={handleSelect} value={category}>
                    <option value="">All</option>
                    <option value="10">Books</option>
                    <option value="11">Film</option>
                    <option value="15">Video Games</option>
                    <option value="17">Science and Nature</option>
                    <option value="21">Sports</option>
                    <option value="23">History</option>
                    <option value="22">Geography</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                </select>
                <button onClick={_ => dispatch(getTrivia(category))}>Start Game</button>
            </SubHeaderDiv>
        </HeaderDiv>
    )
}

export default Header