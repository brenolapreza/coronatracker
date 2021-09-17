import React from 'react';

import { MainList, ContainerList, ListaValores, InputSearch } from './style'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Items({ item, data }) {
    const [find, setFind] = React.useState(item[0]);

    function handleText(e) {
        const proc = data.find(a => a.country === e.target.value);
        console.log(item[0].country.length)
        if (proc) {
            setFind(proc);
        } else {
            setFind(undefined)
        }
    }

    return (
        <>
            <InputSearch>
                <Autocomplete
                    id="combo-box-demo"
                    options={item}
                    getOptionLabel={(option) => option.country}
                    style={{ width: 400 }}
                    onChange={(event, newValue) => {
                        console.log(event)
                        setFind(newValue);
                    }}
                    renderInput={(item) => <TextField {...item} label="Combo box" onChange={handleText} variant="outlined" />}
                />
            </InputSearch>

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