import { useState } from 'react';
import { Link } from 'react-router-dom';
import CoronaLogo from '../../styles/images/corona-icon1.png'
import { HeaderStyle, ListHeader, ButtonHamburger, HeaderMain, Li } from './style';
import { useHistory } from "react-router-dom";

const Active = {
    background: '#6BFFAB',
} 

export default function Header() {
    let history = useHistory();
    const [btnActive, setBtnActive] = useState(true)
    
    const LinksMenu = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'todos os paises',
            link: `/listar`
        },
        {
            name: 'vacina',
            link: '/vacinas'
        },
        {
            name: 'sobre o covid',
            link: '/about'
        },
    ]

    return (
        <HeaderMain>
            <HeaderStyle className="container" btnActive={btnActive}>
                
                <a href="/">
                    <img src={CoronaLogo} alt="" />
                </a>

                <ButtonHamburger onClick={() => setBtnActive(!btnActive)} >
                    <div className="hamburger line-one" />
                    <div className="hamburger line-two" />
                    <div className="hamburger line-three" />
                </ButtonHamburger>

                <ListHeader>
                    {LinksMenu.map((value, index) => (
                        <Li key={index}><Link style={history.location.pathname === value.link ? Active : null } to={value.link}>{value.name}</Link></Li>
                    ))}
                </ListHeader>
            </HeaderStyle>
        </HeaderMain>
    )
}