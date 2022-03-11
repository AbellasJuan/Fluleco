import { Container, Letter, FirstRow, SecondRow, ThirdRow } from "./style"

export default function Teclado({setPalavraProvisoriaDoUsuario, palavraProvisoriaDoUsuario, letraClicada, setLetraClicada}){

    const lettersToP = ['Q', 'W', 'E' ,'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

    const lettersAToAPAGAR = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç', 'APAGAR'];

    const lettersZtoENTER = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

    function enviarRespostaDoUsuario(){
        console.log('enviou')
    };

    return(
        <Container>

            <form onSubmit={enviarRespostaDoUsuario}>
                <FirstRow>
                    {lettersToP.map((letter, index) => 
                    <Letter 
                        key={index}
                        type="button"
                        value={letter}
                        onClick={e => setPalavraProvisoriaDoUsuario([...palavraProvisoriaDoUsuario, e.target.value])}
                    />)}
                </FirstRow>
            
                <SecondRow>
                    {lettersAToAPAGAR.map((letter, index) => 
                        <Letter 
                            key={index}
                            type="button"
                            value={letter}
                            onClick={e => setPalavraProvisoriaDoUsuario([...palavraProvisoriaDoUsuario, e.target.value])}
                        />)}
                </SecondRow>
                
                <ThirdRow>
                    {lettersZtoENTER.map((letter, index) => 
                        <Letter 
                            key={index}
                            type="button"
                            value={letter}
                            onClick={e => setPalavraProvisoriaDoUsuario([...palavraProvisoriaDoUsuario, e.target.value])}
                        />)}
                </ThirdRow>
            </form>
        </Container>
    )
};