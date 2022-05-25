import styled from "styled-components";
import Header from "../src/ui/header";
import Button from "../src/ui/button";

function IndexPage (){
    return(
        <>
            <Header/>
            <ExternalWrapper>
                <OfferTextWraper>
                    <OfferText>
                        silence for your calmness
                    </OfferText>

                
                </OfferTextWraper>
                
                <ButtonOfferWrapper>
                    <ButtonSelfWrapper>
                        <Button bgColor="#4ecb71" text="Sign up"></Button>
                    </ButtonSelfWrapper>
                    <ButtonSelfWrapper>
                        <Button bgColor="#6FE029" text="Sign in"></Button>
                    </ButtonSelfWrapper>
                    
                </ButtonOfferWrapper>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
        
`

const OfferTextWraper = styled.div`
    display: flex;
    justify-content: center;
`

const OfferText = styled.p`
    text-align: center;
    font-size: 54px;
    border-bottom: 2px solid #6FE029;
`

const ButtonOfferWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    
`


const ButtonSelfWrapper = styled.div`
    &:first-child{
        padding-right: 50px;
    }
`

export default IndexPage;