import styled from "styled-components";  

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 30px;

    /* background: rgb(14,107,0);
    background: linear-gradient(90deg, rgba(162,1,1,1) 9%, rgba(14,107,0,1) 100%); */
    
    background-color: #BDD2B6 ;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 3.3em;
    text-align: center;
    font-weight: 600;
    text-shadow: 1px 0px 1px #ffffff, 0  0 20px white;
    color: #B22222
`

export { Container, Title };