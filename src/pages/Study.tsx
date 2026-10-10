import { MaterialEstudo } from "../components/MaterialEstudo"
import { Videoestudo } from "../components/Videoestudo"




export function Study(){

    return(
        <div className="bg-cyan-600 flex gap-5  h-screen justify-center w-4/5 my-30">
            <div className="">
                <MaterialEstudo assunto="Porcentagem"/>
            </div>
            <div className="">
                <Videoestudo assunto="Porcentagem - Matemática para ENEM" videoId="N1xGtRHm2Dg?si=Q5L-vXRJt9GD4Pif"></Videoestudo>
            </div>
        </div>
    )
}