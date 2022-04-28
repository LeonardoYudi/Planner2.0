import { Centro, Container, Left, Right ,LoginOrCad} from "./Cadastro";
import { FaUserAlt ,FaLock} from "react-icons/fa";

function Login() {
  return (
    <Centro>
      <Container>
        <Left>
          <h2>Bem-Vindo !</h2>
          <p>Para ter acesso aos nossos serviços efetue seu Login.</p>
        </Left>
        <Right>
          <h2>Login</h2>
          <h3>Entre usando e-mail e senha</h3>
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
            <div className="password">
              <button>Esqueceu sua senha ?</button>
            </div>
            <button className="login-btn">Login</button>
          </form>
          <LoginOrCad>
            <p>Não possui uma conta ?</p>
            <button>Criar agora</button>
          </LoginOrCad>
        </Right>
      </Container>
    </Centro>
  );
}

export default Login;
