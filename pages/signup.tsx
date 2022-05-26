import styled from "styled-components";
import Link from 'next/link';


interface Props{

}



function SignUpPage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Link href={{pathname: './'}}>
                    <button>
                        Go home
                    </button>
                </Link>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`

`


export default SignUpPage;