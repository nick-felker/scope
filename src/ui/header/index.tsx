import styled from "styled-components";



interface Props{

}

function Header(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Logo></Logo>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    margin: 40px 60px 40px 86px;
`

const Logo = styled.div`
    background: url('./images/Logo.svg');
    width: 120px;
    background-repeat: no-repeat;
    height: 110px;
`

export default Header;