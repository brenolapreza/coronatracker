import styled from "styled-components";

export const MainList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1320px;
    margin: 0 auto;
    
`
export const ContainerList = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   

   @media (max-width:900px){
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
   
   @media (max-width:786px){
        grid-template-columns: 1fr 1fr;
        gap: 2px;
    }
`
export const ListaValores = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 250px;
    height: 180px;
    margin: 20px;
    list-style: none;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.26);
    border-bottom: 8px solid var(--main-color);

    li{
        margin: 2px;
        padding: 2px;
      
    }

    @media (max-width:900px){
        width: 170px;
        height: 220px;
        margin: 5px;
        align-items: flex-start;

        li{
            font-size: 13px;
        }
    }

`
export const CirularWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
`


