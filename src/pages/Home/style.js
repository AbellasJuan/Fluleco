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
    font-size: 3em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    color: #B22222
`

export { Container, Title };