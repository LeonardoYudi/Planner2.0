import Footer from "../Components/Footer";
import Inicio from "../Components/Inicio";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import PageStyle, { HeaderStyle, MainStyle ,FooterStyle} from "./Home.styled";


function Home(){
    return(
        <PageStyle>
            <HeaderStyle>
                <Logo/>
                <NavBar/>
            </HeaderStyle>
            <MainStyle>
                <Inicio/>
            </MainStyle>
            <FooterStyle>
                <Footer/>
            </FooterStyle>
        </PageStyle>
    )
}

export default Home;