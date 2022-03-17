import { useState, useEffect } from "react";
import { Container, LetterScreen, FirstRowScreen } from "../Tela/style.js"

export default function Tela({palavraProvisoriaDoUsuario, palavraSorteada, objetoSorteado, shuffleArray, contador}){
    
    const [playerPosition, setPlayerPosition] = useState('click here to show the position of the player')

    // eslint-disable-next-line
    useEffect(shuffleArray, []);

    function showPosition(){
        setPlayerPosition(objetoSorteado?.posicao)
    };
    
    return(
        <Container>
            <h1 onClick={showPosition}> {playerPosition} </h1>
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