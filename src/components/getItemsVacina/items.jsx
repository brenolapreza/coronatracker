import React from 'react';

import {MainList, ContainerList} from './style'

export default function Items({ item }){
    
    const vacinasItem = item

    return (
        <>
            <MainList>
                <ContainerList>
                  <p>{vacinasItem.All.people_vaccinated}</p>
                  <p>{vacinasItem.All.people_partially_vaccinated}</p>
                  <p>{vacinasItem.All.population}</p>
                </ContainerList>
            </MainList>
        </>
    )
}