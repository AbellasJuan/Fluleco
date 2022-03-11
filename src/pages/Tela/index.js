import { useEffect, useState } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario}){
    
    const palavras = ['ROMERITO', 'FRED', 'RIVELINO', 'GANSO', 'CONCA'];
    
    const [ palavraSorteada, setPalavraSorteada ] = useState([]);

    function shuffleArray(){
        const palavrasEmbaralhadas = palavras.sort(() => Math.random() - 0.5);
        const unicaPalavra = palavrasEmbaralhadas[0];
        const letrasSeparadas = unicaPalavra.split('');
        setPalavraSorteada(letrasSeparadas);
    }

    // eslint-disable-next-line
    useEffect(shuffleArray, []);

    // function mesmoNumeroDeCasas(){
    //     palavraProvisoriaDoUsuario.length = palavraSorteada.length;
    // }
    
    console.log(palavraSorteada)
    console.log(palavraProvisoriaDoUsuario)

    return(
        <Container>

                {<FirstRowScreen>
                    {palavraProvisoriaDoUsuario.map((letraAtual, index) =>
                        
                        <LetterScreen key={index}>  </LetterScreen>
                            
                    )}    
                </FirstRowScreen>}
               
        </Container>
    )
};