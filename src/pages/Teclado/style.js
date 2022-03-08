import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5em;
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

const Letter = styled.button`
    align-self: center;
    width: 4.1em;
    height: 2em;
    margin-right: 0.2em;
    border: 0.2em solid brown;
    border-radius: 10%;
    text-align: center;
    font-weight: 500;
`

export {Container, Letter, FirstRow, SecondRow, ThirdRow};