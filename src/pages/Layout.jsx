import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";

export default function Layout(){

    return(
        <div className="flex">
            <Menu/>
            <Outlet className=""/>
        </div>
    )
}