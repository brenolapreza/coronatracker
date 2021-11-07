import React from 'react';

import {MainList, DivDate, ContainerList, ContainerInfo} from './style'

let date = new Date()


export default function Items({ item, itemAll }){
    return (
        <>
            <MainList>
                    <DivDate>
                        <h5>{date.toLocaleDateString('pt-BR')}</h5>
                    </DivDate>

                    <ContainerList>
                    </ContainerList>

                    <ContainerList>
                    <p><ContainerInfo>{itemAll.World.All.people_vaccinated.toLocaleString('pt-BR')}</ContainerInfo> pessoas vacinadas contra a COVID-19 no mundo</p>
                    <p><ContainerInfo>{item.All.people_vaccinated.toLocaleString('pt-BR')}</ContainerInfo> Pessoas Vacinadas no Brasil</p>
                    <p><ContainerInfo>{item.All.people_partially_vaccinated.toLocaleString('pt-BR')}</ContainerInfo> Pessoas parcialmente vacinadas no Brasil</p>
                    </ContainerList>
            </MainList>
        </>
    )
}