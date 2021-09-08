import React from 'react';

import { MainList, ContainerList, ListaValores } from './style'

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
            
            <Autocomplete
                id="combo-box-demo"
                options={item}
                getOptionLabel={(option) => option.country}
                style={{ width: 300 }}
                onChange={(event, newValue) => {
                    console.log(event)
                    setFind(newValue);
                  }}
               renderInput={(item) => <TextField {...item} label="Combo box" onChange={handleText} variant="outlined" />}
            />
            <MainList>
                <ContainerList>
                    {find === undefined ? (
                        item.map((valor, index) => {
                            return (
                                <ListaValores key={index}>
                                    <li><h3>{valor.country}</h3></li>
                                    <li>Casos: {valor.cases}</li>
                                    <li>Casos hoje: {valor.todayCases}</li>
                                    <li>Mortes: {valor.deaths}</li>
                                    <li>Recuperados: {valor.active}</li>
                                </ListaValores>
                            )
                        })
                    ) : (
                        <ListaValores>
                            <li><h3>{find.country}</h3></li>
                            <li>Casos: {find.cases}</li>
                            <li>Casos hoje: {find.todayCases}</li>
                            <li>Mortes: {find.deaths}</li>
                            <li>Recuperados: {find.active}</li>
                        </ListaValores>
                    )}
                </ContainerList>
            </MainList>
        </>
    )
}