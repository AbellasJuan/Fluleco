import { useState } from "react";
import { Container, Title } from "./style.js";
import Teclado from "../Teclado/index.js";
import Tela from "../Tela/index.js";

export default function Home(){
    
    const [palavraProvisoriaDoUsuario, setPalavraProvisoriaDoUsuario] = useState([]);
    const [ palavraSorteada, setPalavraSorteada ] = useState([]);

    return(
        <Container>
            <Title>FLULECO</Title>

            <Tela palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}/>

            <Teclado palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario} palavraSorteada={palavraSorteada} />
        </Container>
    )
}