import { useEffect } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario, palavraSorteada, objetoSorteado, shuffleArray, contador}){
    
    // eslint-disable-next-line
    useEffect(shuffleArray, []);
    
    return(
        <Container>
            <h1> { objetoSorteado?.posicao } </h1>
            <h1> { contador } </h1>
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