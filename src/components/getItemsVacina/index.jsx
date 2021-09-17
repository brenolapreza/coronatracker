import React from 'react';
import ApiVacina from '../../api/apiVacina'
import Items from './items'

/* IMPORT COMPONENT STYLE */
import { CirularWrapper } from './style'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

export default function GetItemsVacina() {
    const [item, setItem] = React.useState()
    const [itemAll, setItemAll] = React.useState()
    const [loading, setLoading] = React.useState(true);


    /* HOOK DE EFEITO NA FUNÇÃO DE CHAMADA A API */
    React.useEffect(() => {
        setLoading(true)
        async function fetchData() {
            await axios.get('https://covid-api.mmediagroup.fr/v1/vaccines?country=Brazil').then(res => {
                const item = res.data
                setItem(item)
            })
            await axios.get('https://covid-api.mmediagroup.fr/v1/vaccines').then(res => {
                const itemAll = res.data
                setItemAll(itemAll)
            })
            setLoading(false)
        }
        fetchData();
    }, [])

    

    return (
        <>
            {item, itemAll && <Items item={item} itemAll={itemAll} />}
        </>
    )
}