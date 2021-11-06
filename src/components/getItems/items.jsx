import React from 'react';

import { MainList, ContainerList, ListaValores } from './style'

export default function Items({ item, data, find, setFind }) {
    
    return (
        <>
            <MainList>
            <ContainerList>
                    {find === undefined ? (
                        item.map((valor, index) => {
                            return (
                                <ListaValores key={index}>
                                    <li><h3>{valor.country}</h3></li>
                                    <li>Casos: {valor.cases.toLocaleString('pt-BR')}</li>
                                    <li>Casos hoje: {valor.todayCases.toLocaleString('pt-BR')}</li>
                                    <li>Mortes: {valor.deaths.toLocaleString('pt-BR')}</li>
                                    <li>Recuperados: {Number(valor.active).toLocaleString('pt-BR')}</li>
                                </ListaValores>
                            )
                        })
                    ) : (
                        <ListaValores>
                            {find !== null ? (
                                <>
                                    <li><h3>{find.country}</h3></li>
                                    <li>Casos: {find.cases.toLocaleString('pt-BR')}</li>
                                    <li>Casos hoje: {find.todayCases.toLocaleString('pt-BR')}</li>
                                    <li>Mortes: {find.deaths.toLocaleString('pt-BR')}</li>
                                    <li>Recuperados: {Number(find.active).toLocaleString('pt-BR')}</li>
                                </>
                            ) : (
                                setFind(undefined)
                            )}
                        </ListaValores>
                    )}
                </ContainerList>
            </MainList>
        </>
    )
}