import { useState } from "react";
import { Container, Title } from "./style.js";
import Teclado from "../Teclado/index.js";
import Tela from "../Tela/index.js";

export default function Home(){
    
    const [letraClicada, setLetraClicada] = useState("");
    const [palavraProvisoriaDoUsuario, setPalavraProvisoriaDoUsuario] = useState([]);

    return(
        <Container>
            <Title>FLULECO</Title>

            <Tela palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario}/>

            <Teclado palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario}  letraClicada={letraClicada} setLetraClicada={setLetraClicada}/>
        </Container>
    )
}