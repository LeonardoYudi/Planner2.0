import styled from "styled-components";
import NotBook from "../assets/not.jpg"
function Inicio(){

    return(

        <InicioStyle>
            <StyleLeft>
                <CenterStyle>
                    <h2>Gerencie aqui seu Workspace</h2>
                    <h3>Rotina, calendário e agenda tudo no navegador - com Planner</h3>
                    <button>Experimente Planner de Graça</button>
                </CenterStyle>
            </StyleLeft>
            <StyleRight>
                    <img src={NotBook}></img>
            </StyleRight>
        </InicioStyle>
    )
}

export default Inicio;

export const InicioStyle = styled.main`
    display: flex;

`

export const StyleLeft = styled.section`

    width: 32vw;
    display: flex;
    align-items: center;
    
    h2{
        font-size: 4rem;
        margin-bottom: 0.5rem;
    }
    h3{
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    button{
        padding: 1rem 2rem;
        background-color: #097b99;
        font-weight: 700;
        font-size: 90%;
        color: #a0a0a0;
        border: none;
        border-radius: 0.5rem;
        transition: all 0.3s;
    }
    button:hover{
        cursor: pointer;
        color: white;
    }
`

export const CenterStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    align-items: flex-start;
    margin-left: 4rem;
`

export const StyleRight = styled.section`
    width: 68vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img{
        max-width: 60%;
        border-radius: 1.8rem;
        margin-right: 4rem;
    }
`