import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: calc(100vh - 75px);

    h1{
        font-size:58px;
        line-height: 1.1;
    }
    p{
        font-size:25px;
        line-height: 1.1;
        padding: 15px 0;
    }

    @media(max-width:786px){
        grid-template-columns: 1fr;
        justify-content: center;
        padding: 50px 0;

        h1{
            font-size: 48px;
        }
        p{
            font-size:18px;
        }
    }
`

export const SectionMain = styled.div`

    @media(max-width:786px){
        padding: 20px 0;

    }
`