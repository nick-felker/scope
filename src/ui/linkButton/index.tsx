import styled from "styled-components";
import Link from 'next/link';


interface Props{
    text: string;
    bgColor: string;
    link:string; 
}


function LinkButton(props: Props){
    return(
        <>
        <Link href={{pathname:props.link}}>
            <Root bgColor={props.bgColor}>
                {props.text}
            </Root>
        </Link>
        </>
    )
   
}


const ExternalWrapper = styled.div`
    
`


interface RootProps{
    bgColor: string;
}

const Root = styled.button<RootProps>`
    border: none;
    cursor: pointer;
    background-color: ${props => props.bgColor};
    color: white;
    font-size: 24px;
    padding: 20px 60px;
    border-radius: 5px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`


export default LinkButton;