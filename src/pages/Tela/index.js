import { useEffect, useState } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario, setPalavraProvisoriaDoUsuario}){
    
    const palavras = ['ROMERITO', 'FRED', 'RIVELINO', 'GANSO', 'CONCA'];
    
    const [ palavraSorteada, setPalavraSorteada ] = useState([]);

    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        const letrasSeparadas = unicaPalavra.split('');
        palavraProvisoriaDoUsuario.length = letrasSeparadas.length;
        setPalavraSorteada(letrasSeparadas);
    }
    
    // eslint-disable-next-line
    useEffect(shuffleArray, []);

    function colocarLetra(){

    }
    
    console.log(palavraSorteada)
    console.log(palavraProvisoriaDoUsuario)

    return(
        <Container>

                {<FirstRowScreen>
                    {palavraSorteada?.map((letraDaSorteada, index) =>
                        
                        <LetterScreen key={index}>  </LetterScreen>
                            
                    )}    
                </FirstRowScreen>}
               
        </Container>
    )
};