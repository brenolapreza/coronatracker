import  Button  from "../../components/button";
import Header from "../../components/Header";

import {Section, SectionMain} from './style'

import MainImageSection from '../../styles/images/main-image-section.svg'

export default function Home(){
    return(
        <>
            <Header/>
            <Section className="container">
                <SectionMain>
                    <h1>NOVO <br/> CORONAVIRUS</h1>
                    <p>Fique por dentro de todas as<br/> novidades sobre o novo Corona virus</p>
                    <Button text="SAIBA MAIS" link="/" />
                </SectionMain>
                <SectionMain>
                    <img src={MainImageSection} alt="ilustração coronavírus cartoon" />
                </SectionMain>

            </Section>
        </>
    )
}