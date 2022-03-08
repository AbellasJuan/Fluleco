import { Container, Letter, FirstRow, SecondRow, ThirdRow } from "./style"

export default function Teclado(){

    const lettersToP = ['Q', 'W', 'E' ,'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

    const lettersAToAPAGAR = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç', 'APAGAR'];

    const lettersZtoENTER = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

    return(
        <Container>
            <FirstRow>
                {lettersToP.map((letter, index) => 
                 <Letter key={index}> {letter} </Letter>
                )}
            </FirstRow>
            
            <SecondRow>
                {lettersAToAPAGAR.map((letter, index) => 
                    <Letter key={index}> {letter} </Letter>
                )}
            </SecondRow>

            <ThirdRow>
                {lettersZtoENTER.map((letter, index) => 
                    <Letter key={index}> {letter} </Letter>
                )}
            </ThirdRow>
        </Container>
    )
}
