import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: calc(100vh - 75px);

    h1{
        font-size:78px;
        line-height: 1.1;
        font-weight: 900;
    }
    p{
        font-size:25px;
        line-height: 1.4;
        padding: 15px 0;
    }

    @media(max-width:850px){
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        padding: 50px 0;
        align-content: center;

        h1:nth-child(1){
            font-size: 78px;

        }
        h1:nth-child(2){
            font-size: 48px;

        }
        p{
            font-size:18px;

        }
    }
`

export const SectionMain = styled.div`

    @media(max-width:850px){
        padding: 20px 0;

    }
`