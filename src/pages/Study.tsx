import { Videoestudo } from "../components/Videoestudo"

type props = {
    nome: string
}

export function Study({nome}:props){

    return(
        <div className="">
            <div className="flex flex-col h-screen justify-center items-center">
                <Videoestudo assunto="Porcentagem - Matemática para ENEM" videoId="N1xGtRHm2Dg?si=Q5L-vXRJt9GD4Pif"></Videoestudo>
            </div>
            <p>Meu nome é {nome}</p>
        </div>
    )
}