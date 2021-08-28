import styled from "styled-components";

export const HeaderMain = styled.div`
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
    background-color: #fff;
`

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    height:75px;
    padding: 30px;

    img{
    width: 60px;
    padding: 3px;
}

//MOBILE HEADER
@media(max-width:850px){
    padding: 0px;
    position: relative;
    top: 0;
    ul {
        visibility: ${({ btnActive }) => btnActive ? 'hidden' : 'visible'};
        opacity: ${({ btnActive }) => btnActive ? '0' : '1'};
        transition: visibility 0.3s linear, opacity 0.3s linear;
    }

    .hamburger{
        position: ${({ btnActive }) => btnActive ? 'relative' : 'absolute'};
        background-color: #141414;
        height: 0.25rem;
        width: 2rem;
        transition: 0.3s;
        border-radius: 3px;
        z-index:999999;
    }

    .line-one{
        transform: ${({ btnActive }) => btnActive ? 'rotate(0deg)' : 'rotate(45deg)'};
    }

    .line-two{
        transform: ${({ btnActive }) => btnActive ? 'translateX(0)' : 'translateX(100%)'};
        opacity: ${({ btnActive }) => btnActive ? '1' : '0'};
    }
    .line-three{
        transform: ${({ btnActive }) => btnActive ? 'rotate(0deg)' : 'rotate(-45deg)'};
    }
}

`
export const ListHeader = styled.ul`
    display: flex;
    padding-left: 20px;
  

    li {
    list-style: none;
    font-size: 18px;

        a:hover{
        background-color: var(--main-color);
    }
}

    a {
        padding: 4px;
        margin: 4px;
        text-decoration: none;
        color: var(--main-text-color);
        font-weight: 600;
        letter-spacing: 1px; 
        border-radius: 3px;
        text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.315);
    }

    @media(max-width:850px){
        flex-direction: column;
        justify-content: center;
        position: fixed;
        align-items: center;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: #f0f0f0ee;
        margin: 0 auto;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);

        padding: 20px 0 0 0;
        width: 100%;

        li{
            font-size:22px;
            margin: 2px 0;
        }
    }

`
export const ButtonHamburger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    background-color: none;
    border: none;
    right: 20px;
`