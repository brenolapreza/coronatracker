import styled from "styled-components";

const ButtonStyle = styled.a`
    text-decoration: none;
    color: var(--new-black);
    background: var(--main-color);
    font-size:26px;
    border-radius: 5px;
    padding: 12px 50px;
    font-weight: bold;
    transition: .5s;
    margin-top:5px;

    &:hover{
        background: var(--main-color-hover);
    }

    @media(max-width:850px){
        padding: 5px 10px;
        font-size: 17px;
    }
`
export default ButtonStyle