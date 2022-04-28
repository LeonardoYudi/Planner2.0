import styled from "styled-components";

function Logo(){
    return(
        <StyleLogo>
            <h1><span>Plan</span><span className='blue'>ner</span></h1>
        </StyleLogo>
    )
}

export default Logo;

export const StyleLogo = styled.div`
    font-size: 110%;
    padding: 1.2rem 4rem;
    .blue{
        color:#097b99;
    }
`