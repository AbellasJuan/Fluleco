import styled from "styled-components";

const Container = styled.div`
    margin-top: 3em;
    width: 40em;
    height: 32em;
    border: 0.2em solid white;
    border-radius: 2%;
    display: flex;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: beige;
`

const FirstRowScreen = styled.div`
    display: flex;
    justify-content: center;

    margin-left: 10px;
    margin-bottom: 10px;
`

const LetterScreen = styled.div`
    width: 4.1em;
    height: 4.3em;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.2em;
    
    border: 0.2em solid brown;
    border-radius: 10%;
    
    font-weight: 900;
`

export { Container, LetterScreen, FirstRowScreen };