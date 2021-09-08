import styled from "styled-components";
import BackgroundMain from '../../styles/images/background-main.svg';

export const SectionMain = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    background-image: url(${BackgroundMain});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const SectionTitle = styled.div`
    padding: 65px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 720px;
    text-align: center;
   
    h1{
        font-size: 4rem;
        text-shadow: 0px 0px 11px rgba(0, 0, 0, 0.63);
        font-weight: bold;
    }
    p{
        font-size: 1.4rem;
        padding: 10px;
        text-shadow: 0px 0px 11px rgba(0, 0, 0, 0.2);
    }

    @media(max-width:850px){
        padding: 10px;
        top:40px;
        position: relative;

        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.1rem;
        }
    }



`

export const SectionImage = styled.div`
    position: absolute;
    bottom: 0;
`