import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Cadastro() {
  return (
    <Centro>
      <Container>
        <Left>
          <h2>Bem-Vindo !</h2>
          <p>Para ter acesso aos nossos serviços efetue seu Cadastro.</p>
        </Left>
        <Right>
          <h2>Cadastro</h2>
          <h3>Cadastre-se usando e-mail e senha</h3>
          <form>
            <label>Email</label>
            <div className="input-label">
              <FaUserAlt />
              <input type="email"></input>
            </div>
            <label>Senha</label>
            <div className="input-label">
              <i>
                <FaLock />
              </i>
              <input type="password"></input>
            </div>
            <label>Confirmar senha</label>
            <div className="input-label">
              <i>
                <FaLock />
              </i>
              <input type="password"></input>
            </div>
            <button className="login-btn">Cadastrar</button>
          </form>
          <LoginOrCad>
            <p>Possui uma conta ?</p>
            <button>Efetuar login</button>
          </LoginOrCad>
        </Right>
      </Container>
    </Centro>
  );
}

export default Cadastro;

export const Centro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: whitesmoke;
  width: 60%;
  height: 65%;
  border-radius: 2rem;
  display: flex;
`;

export const Left = styled.div`
  border-radius: 2rem 0rem 0rem 2rem;
  background-color: #097b99;
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h2 {
    color: #fff;
    font-size: 300%;
    font-weight: 400;
  }

  p {
    color: #fff;
    width: 60%;
  }
`;

export const Right = styled.div`
  padding: 1rem;
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 300%;
    color: #097b99;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.8rem;
  }

  form {
    width: 85%;
  }

  label {
    font-size: 130%;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  input {
    font-size: 130%;
    width: 90%;
    border: none;
    outline: none;
    padding: 0.8rem;
    background-color: white;
    border-radius: 0.5rem;
  }

  .input-label {
    background-color: white;
    padding: 0.5px 1rem;
    margin-bottom: 0.6rem;
  }

  .password {
    display: flex;
    justify-content: flex-end;
    button {
      border: none;
      font-weight: bold;
      transition: all 0.3s;
    }
    button:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .login-btn {
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem 1rem;
    font-size: 130%;
    font-weight: bolder;
    border: none;
    color: white;
    background-color: #097b99;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const LoginOrCad = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 110%;
    margin-bottom: 0.5rem;
  }

  button {
    background-color: none;
    border: none;
    font-weight: 600;
    font-size: 1rem;
  }

  button:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
