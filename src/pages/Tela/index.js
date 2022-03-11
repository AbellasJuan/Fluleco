import { useEffect } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario, palavraSorteada, setPalavraSorteada, shuffleArray}){
    
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