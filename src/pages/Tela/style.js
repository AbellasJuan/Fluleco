import styled from "styled-components";

const Container = styled.div`
    margin-top: 3em;
    width: 40em;
    height: 32em;
    border: 0.4em solid white;
    border-radius: 2%;
    display: flex;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: whitesmoke;
`

const FirstRowScreen = styled.div`
    display: flex;
    justify-content: center;

    margin-left: 10px;
`

const LetterScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5em;
    height: 2.5em;
    
    margin-right: 0.2em;

    border: 0.22em solid #B22222;
    border-radius: 10%;
    
    font-family: 'Syne Mono', monospace;
    font-size: 30px;
    font-weight: 600;
    color: green;
;
`

export { Container, LetterScreen, FirstRowScreen };