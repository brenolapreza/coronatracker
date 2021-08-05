import { useState } from 'react';
import { Link } from 'react-router-dom';
import CoronaLogo from '../../styles/images/corona-icon1.png'

import { HeaderStyle, ListHeader, ButtonHamburger } from './style';

export default function Header(){

    const [btnActive, setBtnActive] = useState(true)



    return(
        <HeaderStyle btnActive={btnActive}>
            <a href="/">
                <img src={CoronaLogo} alt=""/>
            </a>
            <ButtonHamburger onClick={() => setBtnActive(!btnActive)} >
                <div className="hamburger line-one" />
                <div className="hamburger line-two" />
                <div className="hamburger line-three" />
            </ButtonHamburger>
            <ListHeader>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/listar">TODOS OS PAÍSES</Link></li>
                <li><Link to="/">VACINAS</Link></li>
                <li><Link to="/">SOBRE O COVID-19</Link></li>
            </ListHeader>
        </HeaderStyle>
    )
}