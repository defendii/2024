import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
export function Menu(){

    // const estiloItemMenu = "flex items-center gap-3 px-3 py-4 hover:bg-slate-800 hover:text-slate-200"

    const getEstilo = (props) => {
        let estiloInicial = "flex items-center text-zinc-50 gap-3 px-3 py-4 hover:bg-slate-800 hover:text-slate-200"

        let estiloAtivo = "border-solid border-r-4 border-slate-800"
    
        
        let estiloFinal = props.isActive ? estiloInicial + estiloAtivo : estiloInicial

        return estiloFinal

    }

    return (
        <div className={`bg-black text-zinc-50 w-60 h-screen flex
                flex-col 
        `}>
            <header className="flex justify-center p-3 border-b border-slate-300 gap-1">
                <IconRouteAltLeft/>
                <span className="font-bold">
                    React Rotas
                </span>
            </header>

            <nav className="flex flex-col">
                <NavLink to="/home" className={getEstilo}>
                    <IconHome/>
                    Home
                </NavLink>

                <NavLink to="/contato" className={getEstilo}>
                    <IconAddressBook/>
                    Contato
                </NavLink>

                <NavLink to="/sobre" className={getEstilo}>
                    <IconInfoCircle/>
                    Sobre
                </NavLink>

                <NavLink to="/estado1" className={getEstilo}>
                    <IconInfoCircle/>
                    Estado 1
                </NavLink>
            </nav>

            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento Web 2</span>
            </footer>
        </div>
    )
}