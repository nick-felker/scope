import styled from "styled-components";
import Header from "../src/ui/header";
import LinkButton from "../src/ui/linkButton";



function Team(){
    return(
        <>
            <Header/>
            <ExternalWrapper>
                <Title>
                    Put your data and we will recive it
                </Title>
                <InputsWrapper>
                    <NameInput placeholder="name" type="text"/>
                    <EmailInput placeholder="e-mail" type="email"/>
                    <TelegramInput placeholder="telegram" type="text"/>
                </InputsWrapper>
                <ButtonWrapper>
                    <LinkButton link="./" bgColor="#6fe029" text="Send"/>
                </ButtonWrapper>
                
            </ExternalWrapper>
        </>
    )
}


const Title = styled.h1`
    font-weight: 400;
    opacity: 0.8;
`

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const InputsWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
    flex-direction: column;
`

const NameInput = styled.input`
    width: 500px;
    outline: none;
    font-size: 24px;
    opacity: 0.7;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 5px 0px 5px 10px;
    caret-color: #6fe029;
    border: 2px solid #6fe029;
    ::placeholder{
        color: #6fe029;
        font-size: 20px;
        font-weight: 400;
        padding-left: 10px;
    }
    :focus{
        ::placeholder{
            color: white;
            transition: 0.5s;
        }
    }
`

const EmailInput = styled.input`
    width: 500px;
    margin-bottom: 20px;
    outline: none;
    opacity: 0.7;
    font-size: 24px;
    border-radius: 5px;
    padding: 5px 0px 5px 10px;
    caret-color: #6fe029;
    border: 2px solid #6fe029;
    ::placeholder{
        color: #6fe029;
        font-size: 20px;
        font-weight: 400;
        padding-left: 10px;
    }
    :focus{
        ::placeholder{
            color: white;
            transition: 0.5s;
        }
    }
`

const TelegramInput = styled.input`
    width: 500px;   
    outline: none;
    font-size: 24px;
    border-radius: 5px;
    opacity: 0.7;
    padding: 5px 0px 5px 10px;
    caret-color: #6fe029;
    border: 2px solid #6fe029;
    ::placeholder{
        color: #6fe029;
        font-size: 20px;
        font-weight: 400;
        padding-left: 10px;
    }
    :focus{
        ::placeholder{
            color: white;
            transition: 0.5s;
        }
    }
`

const ButtonWrapper = styled.div`
    
    margin-top: 40px;

`


export default Team;