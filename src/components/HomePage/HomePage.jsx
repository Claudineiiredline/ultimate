import { HomePageContainer, HomePageHeader } from "./styles"
import { MdLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BiDownload } from "react-icons/bi";

export function HomePage() {
    return (
        <HomePageContainer>
            <HomePageHeader>
                <ul>
                    <li>
                        <a href="/"><IoHome size={15}/> Início</a>
                    </li>
                    <li>
                         <a href="/downloads" ><BiDownload size={15}/>Downloads</a>
                    </li>

                    <li>
                        <a href="/login"><MdLogin size={15}/> Login</a>
                    </li>
                    <li>
                        <a href="/register"><FaUserPlus size={15}/>Cadastrar</a>
                    </li>
                </ul>
            </HomePageHeader>
            
        </HomePageContainer>
    )
}