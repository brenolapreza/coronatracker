import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoronaLogo from '../../styles/images/corona-icon1.png'

import { HeaderStyle, ListHeader, ButtonHamburger, HeaderMain } from './style';

export default function Header() {

    const [btnActive, setBtnActive] = useState(true)

    const [show, setShow] = useState(true)
    const controlNavBar = () => {
        if (window.scrollY > 300) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar)
        return () => {
            window.removeEventListener('scroll', controlNavBar)
        }
    })


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
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/listar">TODOS OS PAÍSES</Link></li>
                    <li><Link to="/">VACINAS</Link></li>
                    <li><Link to="/">SOBRE O COVID-19</Link></li>
                </ListHeader>
            </HeaderStyle>
        </HeaderMain>
    )
}