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

const Letter = styled.input`width: 2.5em;
    height: 2.5em;
    margin-right: 0.2em;
    border: 0.22em solid #B22222;
    border-radius: 10%;
    width: 2.5em;
    height: 2.5em;
    margin-right: 0.2em;
    border: 0.22em solid #B22222;
    border-radius: 10%;
    text-align: center;
    
    font-family: 'Syne Mono', monospace;
    font-size: 30px;
    font-weight: 600;
    color: white;
    color: ${(props) => props.apagar === 10 && 'red'};
    width: ${(props) => props.apagar === 10 && '3.7em'};
    background: ${(props) => props.apagar ===10 && 'white'};
    
    color: ${(props) => props.enter && 'red'};
    width: ${(props) => props.enter && '3.7em'};
    background: ${(props) => props.enter && 'white'};

    :hover{
        transition-duration: 0.2s;
        background-color: green;
        cursor: pointer;
    }
`

export {Container, Letter, FirstRow, SecondRow, ThirdRow};