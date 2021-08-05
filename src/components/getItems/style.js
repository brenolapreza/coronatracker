import styled from "styled-components";

export const MainList = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerList = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`
export const ListaValores = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 320px;
    height: 250px;
    margin: 20px;
    list-style: none;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.26);
    border-bottom: 5px solid var(--main-color);

    li{
        margin: 4px;
        padding: 4px;
    }
  
    @media (max-width:900px){
        .container-list{
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
    }
    @media (max-width:786px){
        .container-list{
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
`


