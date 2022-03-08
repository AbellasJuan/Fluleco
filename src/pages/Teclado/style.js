import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3em;
`

const FirstRow = styled.div`
`

const SecondRow = styled.div`
    margin-top: 0.5em;
    padding-left: 1em;
`

const ThirdRow = styled.div`
    margin-top: 0.5em;
    padding-left: 2em;
`

const Letter = styled.input`
    align-self: center;
    width: 4.1em;
    height: 4.3em;
    margin-right: 0.2em;
    border: 0.22em solid #B22222;
    border-radius: 10%;
    text-align: center;
    font-weight: 900;

    :hover{
        transition-duration: 0.2s;
        background-color: green;
        cursor: pointer;
    }
`

export {Container, Letter, FirstRow, SecondRow, ThirdRow};