import React from "react"
import {useSelector, useDispatch} from 'react-redux'

const Header = () =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    return (
        <>
            <h1>Bast's Trivia Challenge!</h1>
            <div className="subheader">
                <h3>Score: {`${state.score}/10`}</h3>
                <select>
                    <option value="general">General</option>
                    <option value="general">General</option>
                    <option value="general">General</option>
                    <option value="general">General</option>
                    <option value="general">General</option>
                </select>
            </div>
        </>
    )
}

export default Header