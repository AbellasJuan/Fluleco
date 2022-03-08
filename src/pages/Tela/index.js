import { useEffect, useState } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela(){
    
    const [ palavraEscolhida, setPalavraEscolhida ] = useState([])

    const palavras = ['ROMERITO', 'FRED', 'RIVELINO', 'GANSO', 'CONCA'];

    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        const letrasSeparadas = unicaPalavra.split('');
        setPalavraEscolhida(letrasSeparadas);
    }

    // eslint-disable-next-line
    useEffect( shuffleArray,[]);

    return(
        <Container>

                {<FirstRowScreen>
                    {palavraEscolhida.map((letter, index) => 
                        <LetterScreen key={index}> {letter} </LetterScreen>
                    )}    
                </FirstRowScreen>}
                {<FirstRowScreen>
                    {palavraEscolhida.map((index) => 
                        <LetterScreen key={index}>  </LetterScreen>
                    )}    
                </FirstRowScreen>}
                {<FirstRowScreen>
                    {palavraEscolhida.map((index) => 
                        <LetterScreen key={index}>  </LetterScreen>
                    )}    
                </FirstRowScreen>}
                {<FirstRowScreen>
                    {palavraEscolhida.map((index) => 
                        <LetterScreen key={index}>  </LetterScreen>
                    )}    
                </FirstRowScreen>}
                {<FirstRowScreen>
                    {palavraEscolhida.map((index) => 
                        <LetterScreen key={index}>  </LetterScreen>
                    )}    
                </FirstRowScreen>}
                
        </Container>
    )
}