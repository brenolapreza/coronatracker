import React from 'react';

import {MainList, ContainerList} from './style'

export default function Items({ item }){
    return (
        <>
            <MainList>
                <ContainerList>
                    {console.log(item.All)}
                    <h1>País: {item.All.country}</h1>
                    <p>Localização: {item.All.location}</p>
                    <p>Pessoas Vacinadas: {item.All.people_vaccinated}</p>
                    <p>Pessoas parcialmente vacinadas: {item.All.people_partially_vaccinated}</p>
                    <p>População: {item.All.population}</p>
                </ContainerList>
            </MainList>
        </>
    )
}