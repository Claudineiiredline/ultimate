import { NavBarContainer, NavBarContent } from "./styles";
import { GiTrophy } from "react-icons/gi";
import { BsDiscord } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";
import { HomePageInfo } from "../HomePageInfoBox/HomePageInfoBox";


export function NavBar() {
    return (
        <NavBarContainer>
            <NavBarContent>
                <ul>
                    <li>
                        <a href="#"> <IoInformationCircle size={15}/>Informações</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://discord.gg/8WjNWEDyeR"> <BsDiscord size={15}/>Discord</a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><GiTrophy size={15}/>Rank</a>
                    </li>
                </ul>
            </NavBarContent>
            <HomePageInfo/>
        </NavBarContainer>
    )
}