import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <NavStyle>
      <NavButton>Inicio</NavButton>
      <NavButton>Documentação</NavButton>
      <NavButton>Pagina</NavButton>
      <NavButton>Cadastrar</NavButton>
      <NavButton>Login</NavButton>
    </NavStyle>
  );
}

export default NavBar;

export const NavStyle = styled.nav`
  display: flex;
  margin-right: 4rem;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  padding: 1rem 2rem;
  margin-right: 1rem;
  font-size: 140%;
  cursor: pointer;
  color: #a0a0a0;
  position: relative;

  :after {
    content: "";
    position: absolute;
    background-color: #097b99;
    height: 4px;
    width: 0%;
    left: 0;
    bottom: -1px;
    transition: all 0.3s;
  }

  :hover:after {
    width: 100%;
  }

  :hover {
    color: #fff;
  }

  :last-child {
    transition: all 0.4s;
    border-radius: 1rem;
    margin-right: 0;
  }
`;
