import Footer from "../Components/Footer";
import Inicio from "../Components/Inicio";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import PageStyle, { HeaderStyle, MainStyle, FooterStyle } from "./Home.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../Components/Cadastro";
import Login from "../Components/Login";

function Home() {
  return (
    <PageStyle>
      <HeaderStyle>
        <Logo />
        <NavBar />
      </HeaderStyle>
      <MainStyle>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MainStyle>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </PageStyle>
  );
}

export default Home;
