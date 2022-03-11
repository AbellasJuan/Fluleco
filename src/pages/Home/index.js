import { useState } from "react";
import { Container, Title } from "./style.js";
import Teclado from "../Teclado/index.js";
import Tela from "../Tela/index.js";

export default function Home(){
    const palavras = ['CANO', 'CRISTIANO', 'PINEIDA', 'ANDRE'];

    const [palavraProvisoriaDoUsuario, setPalavraProvisoriaDoUsuario] = useState([]);
    const [ palavraSorteada, setPalavraSorteada ] = useState([]);

    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        const letrasSeparadas = unicaPalavra.split('');
        setPalavraSorteada(letrasSeparadas);
    }

    return(
        <Container>
            <Title>FLULECO</Title>

            <Tela palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} shuffleArray={shuffleArray}/>

            <Teclado palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario} palavraSorteada={palavraSorteada} shuffleArray={shuffleArray}/>
        </Container>
    )
}