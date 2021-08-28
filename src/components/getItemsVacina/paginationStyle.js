import styled from "styled-components";

export const NavPagination = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
`
export const UlPagination = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;

    a {
        padding: 8px 15px;
        margin: 10px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.26);
        text-decoration:none;
        transition: .5s;
        color: var(--new-black);

        &:hover{
            background-color: var(--main-color);
        }
    }
`