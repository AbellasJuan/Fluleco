import { useState } from "react";
import { Container, Title } from "./style.js";
import Teclado from "../Teclado/index.js";
import Tela from "../Tela/index.js";

export default function Home(){
    const palavras = [
                        {name: 'JOGADORA', posicao: 'ATACANTEA', primeiraLetra: 'C'},
                        {name: 'JOGADORB', posicao: 'ATACANTEB'}
                    ];

    const [palavraProvisoriaDoUsuario, setPalavraProvisoriaDoUsuario] = useState([]);
    const [ palavraSorteada, setPalavraSorteada ] = useState([]);
    const [objetoSorteado , setObjetoSorteado] = useState({});
    const [contador, setContador] = useState(0);                    

    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        setObjetoSorteado(unicaPalavra);
        const letrasSeparadas = unicaPalavra.name.split('');
        setPalavraSorteada(letrasSeparadas);
    };

    console.log(objetoSorteado)

    return(
        <Container>
            <Title>LETRECO</Title>

            <Tela palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} shuffleArray={shuffleArray} objetoSorteado={objetoSorteado} setContador={setContador} contador={contador}/>

            <Teclado palavraProvisoriaDoUsuario={palavraProvisoriaDoUsuario} setPalavraProvisoriaDoUsuario={setPalavraProvisoriaDoUsuario} palavraSorteada={palavraSorteada} shuffleArray={shuffleArray} setContador={setContador} contador={contador}/>
        </Container>
    )
}