import { useEffect } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario, palavraSorteada, setPalavraSorteada}){
    
    const palavras = ['CANO', 'ARIAS', 'YAGO', 'CRISTIANO', 'GANSO', 'FABIO', 'DAVID', 'NINO', 'ANDRE'];
    
    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        const letrasSeparadas = unicaPalavra.split('');
        setPalavraSorteada(letrasSeparadas);
    }
    
    // eslint-disable-next-line
    useEffect(shuffleArray, []);
    
    return(
        <Container>

                {<FirstRowScreen>
                    {palavraSorteada?.map((letraDaSorteada, index) =>
                        
                        <LetterScreen key={index}> 
                        
                        { palavraProvisoriaDoUsuario[index] ? 
                        palavraProvisoriaDoUsuario[index] : '' } 
                        
                        </LetterScreen>
                            
                    )}    
                </FirstRowScreen>}
               
        </Container>
    )
};