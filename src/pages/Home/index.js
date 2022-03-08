// import { useState } from "react";
import { Container, Title } from "./style.js";
import Teclado from "../Teclado/index.js";
import Tela from "../Tela/index.js";

export default function Home(){
    
    // const [name, setName] = useState('')

    return(
        <Container>
            <Title>FLULECO</Title>

            <Tela/>

            <Teclado/>
        </Container>
    )
}