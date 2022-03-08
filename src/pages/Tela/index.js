import { useEffect, useState } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario}){
    
    const [ palavraEscolhida, setPalavraEscolhida ] = useState([]);

    const palavras = ['ROMERITO', 'FRED', 'RIVELINO', 'GANSO', 'CONCA'];

    const [letraAtual, setLetraAtual] = useState();

    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        const letrasSeparadas = unicaPalavra.split('');
        setPalavraEscolhida(letrasSeparadas);
    }

    // eslint-disable-next-line
    useEffect(shuffleArray,[]);


    function mesmoNumeroDeCasas(){
        palavraProvisoriaDoUsuario.length = palavraEscolhida.length;
    }
    
    console.log(palavraEscolhida)
    console.log(palavraProvisoriaDoUsuario)


    return(
        <Container>

                {<FirstRowScreen>
                    {palavraProvisoriaDoUsuario.map((letraAtual, index) =>
                        
                        <LetterScreen key={index}> { letraAtual } </LetterScreen>
                            
                        
                    )}    
                </FirstRowScreen>}
                
        </Container>
    )
}