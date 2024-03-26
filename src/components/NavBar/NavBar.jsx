import { NavBarContainer, NavBarContent } from "./styles";
import { FaBook } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaBan } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";
import { HomePageContent } from "../HomePageContent/HomePageContent";


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
            
        <HomePageContent/>
        </NavBarContainer>
    )
}