import styled from 'styled-components'

export const HeaderDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    background-image: linear-gradient(green, blue);
    color: #fff;
    text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
    border-bottom: 3px solid black;
    height: 15%;
`;

export const SubHeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    select
    {
        height: 25px;
        width: 100px;
    }
    button
    {
        height: 30px;
        background: white;
        border: 2px solid black;
        border-radius: 8px;
    }
`;