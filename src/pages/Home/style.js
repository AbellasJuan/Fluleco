import styled from "styled-components";  

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    padding-top: 30px;

    background-color: lightblue;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
`

const NameInput = styled.input`
    height: 58px;

    font-size: 25px;
    font-weight: 400;
    color: black;

    padding-left: 10px;
    border-radius: 5px;
    margin-top: 40px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    background-color: red;

    ::placeholder{
        font-size: 20px;
        font-weight: 400;
        color: black;
    };

    :focus-within{
        padding-left: 10px;  
    };
`

export { Container, Title, NameInput };