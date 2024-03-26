import { Footer } from "../components/Footer/Footer";
import { HomePage } from "../components/HomePage/HomePage";
import { NavBar } from "../components/NavBar/NavBar";
import { HomePageSessionContainer } from "./styles";

export function HomePageSession(){

    return (

        <HomePageSessionContainer>
        <NavBar/>
        <HomePage/>
        <Footer/>
        </HomePageSessionContainer>
    );
}