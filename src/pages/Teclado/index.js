import { Container, Letter, FirstRow, SecondRow, ThirdRow } from "./style"

export default function Teclado({ setPalavraProvisoriaDoUsuario, palavraProvisoriaDoUsuario, palavraSorteada, shuffleArray, setContador, contador}){

    const lettersToP = ['Q', 'W', 'E' ,'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

    const lettersAToAPAGAR = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç', 'APAGAR'];

    const lettersZtoENTER = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    function enviarRespostaDoUsuario(e){
        e.preventDefault();
        setContador(contador + 1)
        console.log('enviou', contador)
        darResultado(palavraProvisoriaDoUsuario, palavraSorteada);
    };

    function darResultado(respostaUsuario, respostaCorreta) {
        const resposta = respostaUsuario?.length === respostaCorreta.length && respostaUsuario?.every((value, index) => value === respostaCorreta[index]);
        if(resposta){
            shuffleArray()
            setPalavraProvisoriaDoUsuario([]);
            return alert(`PARABÉNS!! VOCÊ ACERTOU EM ${contador} TENTATIVAS!!`)
        }
    }

    function verificaSeEhUltimaLetra(item, index){
        if(index !== (palavraProvisoriaDoUsuario?.length)-1){
            return true;
        }
    };

    function autorizarHabilitarTeclado(e){
        if((palavraSorteada?.length === palavraProvisoriaDoUsuario?.length) && (e !== 'APAGAR')){
            return;
        } else {
            funcionalidadeTeclado(e);
        }
    };

    function funcionalidadeTeclado(e){
        
        if(e === 'APAGAR'){
           const apagar = palavraProvisoriaDoUsuario?.filter(verificaSeEhUltimaLetra); 
           setPalavraProvisoriaDoUsuario(apagar);

        }else{
           setPalavraProvisoriaDoUsuario([...palavraProvisoriaDoUsuario, e])
        };
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
                        onClick={event => autorizarHabilitarTeclado(event.target.value)}
                    ></Letter>)}
                </FirstRow>
            
                <SecondRow>
                    {lettersAToAPAGAR.map((letter, index) => 
                        <Letter 
                            apagar={index}
                            key={index}
                            type="button"
                            value={letter}
                            onClick={event => autorizarHabilitarTeclado(event.target.value)}
                        />)}
                </SecondRow>
                
                <ThirdRow>
                    {lettersZtoENTER.map((letter, index) => 
                        <Letter 
                            key={index}
                            type="button"
                            value={letter}
                            onClick={event => autorizarHabilitarTeclado(event.target.value)}
                        />)}
                        
                    <Letter type="submit" enter={'enter'} value="ENTER"/>
                </ThirdRow>
            </form>
        </Container>
    )
};