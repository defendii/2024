import { useState } from "react";
import { Pagina } from "../components/Pagina";

export default function Estado1(){

    const [num, setNum]=useState(0)
    // const estado =  useState(500)
    // const num = estado[0]
    // const setNum = estado[1]


    function incrementar(){

        setNum(num + 1)
    }

    return(
        <Pagina titulo="Estado 1" subtitulo="Conceito de Estado no React">
            <div>
                <div>{num}</div>
                <button className="bg-zinc-600 p-4 rounded-md" onClick={incrementar}>Incrementar</button>
            </div>
            
        </Pagina>
    )
}