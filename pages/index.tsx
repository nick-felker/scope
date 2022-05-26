import styled from "styled-components";
import Header from "../src/ui/header";
import LinkButton from "../src/ui/linkButton";
import { useState } from 'react';




function IndexPage (){

    const [modalWindowFlag, setWindowFlag] = useState<boolean>(true);



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
                        <LinkButton link="./signup" bgColor="#4ecb71" text="Sign up"></LinkButton>
                    </ButtonSelfWrapper>
                    <ButtonSelfWrapper>
                        <LinkButton link="./signin" bgColor="#6FE029" text="Sign in"></LinkButton>
                    </ButtonSelfWrapper>
                </ButtonOfferWrapper>
                <PageAboutSection>
                    <TitleText>
                        App for people by people
                    </TitleText>
                    <SubTitleText>
                        Confidential messenger for completely secure communication. Try all the features by registering or logging into your account
                    </SubTitleText>
                    
                </PageAboutSection>
                <VacancyWrapper>
                    <VacancyTitle>
                        Team
                    </VacancyTitle>
                    <VacancySubTitle>
                        The project is under development and we need developers, designers, artists, people who want to contribute to the development of privacy in the modern world. Please select the appropriate profile
                    </VacancySubTitle>
                    
                        
                            <VacancyButtonWrapper>
                                <LinkButton text='Select role' bgColor="#6fe029" link="./team"/>
                            </VacancyButtonWrapper>
                    {modalWindowFlag === true ? 
                    <ModalWindow>
                        <ModalTitle>Try our app in other platforms</ModalTitle>
                        <PlatformsList>
                            <PlatformElement>
                               
                                <PlatformTitle>Desktop</PlatformTitle>
                            </PlatformElement>
                            <PlatformElement>
                                
                                <PlatformTitle>Mobile</PlatformTitle>
                            </PlatformElement>
                        </PlatformsList>
                    </ModalWindow> 
                    : null
                    }
                   
                </VacancyWrapper>
                
            </ExternalWrapper>
            {modalWindowFlag === true ? <Overlay onClick={()=>{setWindowFlag(false)}}/> : null}
            
            
        </>
    )
}


const ExternalWrapper = styled.div`
    height: 1000px;
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
const PageAboutSection = styled.div`
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    background-color: #f3f3f3;
    padding: 40px 0px;
    align-items: center;
`
const TitleText = styled.h1`
    font-weight: 400;
    text-align: justify;
    opacity: 0.8;
`
const SubTitleText = styled.p`
    position: relative;
    width: 470px;
    text-align: justify;
    font-size: 24px;
    margin-top: 30px;
`

const Footer = styled.div`
    background-color: #6fe029;
    height: 100px;
`
const VacancyWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const VacancyTitle = styled.h1`
    font-weight: 400;
    text-align: justify;
    opacity: 0.8;
`

const VacancySubTitle = styled.p`
    position: relative;
    width: 473px;
    text-align: justify;
    font-size: 24px;
    margin-top: 30px;
`


const VacancyButtonWrapper = styled.div`
    margin-top: 40px;
`


const Overlay = styled.div`
    background-color: #dddddd;
    opacity: 0.6;
    z-index: 2;
    cursor: pointer;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
`

const ModalWindow = styled.div`
    position: fixed;
    top: 10px;
    z-index: 3;
    width: 400px;
    padding: 40px 0px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const ModalTitle = styled.p`
    font-size: 24px;
`

const PlatformsList = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: space-between;
`

const PlatformElement = styled.div`
    display: flex;
    :hover{
        transition: 0.5s;
        background-color: red;
        opacity: 0.5;
    }
    cursor: pointer;
    margin-right: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;  
    &:last-child{
        margin-right: 0px;
    }
    
`

const DesktopImg = styled.img`

`

const PlatformTitle = styled.p`
    
`


export default IndexPage;