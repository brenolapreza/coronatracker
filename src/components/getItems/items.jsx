import React from 'react';

import {MainList, ContainerList, ListaValores} from './style'

export default function Items({ item }){

    return (
        <>
            <MainList>
                <ContainerList>
                    {item.map((valor, index) => {
                        return <ListaValores key={index}>
                            <li><h3>{valor.country}</h3></li>
                            <li>Casos: {valor.cases}</li>
                            <li>Casos hoje: {valor.todayCases}</li>
                            <li>Mortes: {valor.deaths}</li>
                            <li>Recuperados: {valor.active}</li>
                        </ListaValores>
                    })}
                </ContainerList>
            </MainList>
        </>
    )
}