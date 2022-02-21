import { useState } from "react";
import { Container, Title, NameInput } from "./style.js";

export default function Home(){
    
    const [name, setName] = useState('')

    return(
        <Container>
            <Title>FLULECO</Title>

            <NameInput 
                type="text" 
                placeholder="Nome" 
                value={name} 
                maxlength="12" 
                onChange={e => setName(e.target.value)}/>
        </Container>
    )
}