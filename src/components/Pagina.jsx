export function Pagina(props){

    return(
        <div className="w-full h-full bg-slate-200">
            <header className="bg-zinc-400 p-3">
                <h1 className="text-xl font-black">{props.titulo}</h1>
                <h2 className="text-sm ">{props.subtitulo}</h2>
            </header>
            <main className="flex flex-col p-3">
                {props.children}
            </main>
        </div>
    )
}