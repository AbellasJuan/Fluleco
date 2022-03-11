import { useEffect, useState } from "react";
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
    
    console.log(palavraSorteada)
    console.log(palavraProvisoriaDoUsuario)

    // function colocarLetra(index){
    //     return console.log(index)
    //     palavraProvisoriaDoUsuario[index]
    // }

    // if(palavraProvisoriaDoUsuario[index] === true){
    //     return palavraProvisoriaDoUsuario[index]
    // } else{
    //     return ''
    // }

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