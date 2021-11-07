import React from 'react'
import Button  from "../../components/button";
import Header from "../../components/Header";

import {SectionImage, SectionMain, SectionTitle} from './style'
import ImagemCovid from '../../styles/images/covid-image.svg'

export default function Home(){
      return(
        <>
            <Header/>
            <SectionMain>
                <SectionTitle>
                    <h1>COVID-19</h1>
                    <p>Números de infectados e total de vacinados no Brasil e no mundo</p>
                    <Button link="/listar" text="QUERO SABER MAIS" />
                </SectionTitle>
                <SectionImage>
                    <img src={ImagemCovid} alt="Imagem sobre o COVID-19" />
                </SectionImage>
            </SectionMain>
        </>
    )
}