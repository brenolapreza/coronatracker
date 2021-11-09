import React from 'react';
import Items from './items'

/* IMPORT COMPONENT STYLE */
// import { CirularWrapper } from './style'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

export default function GetItemsVacina() {
    const [item, setItem] = React.useState()
    const [itemAll, setItemAll] = React.useState()
    const [loading, setLoading] = React.useState(false);


    /* HOOK DE EFEITO NA FUNÇÃO DE CHAMADA A API */
    React.useEffect(() => {
        async function fetchData() {
            setLoading(true)
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
            <center>
                {loading && <CircularProgress color="primary" thickness={6} size={50}/>}
            </center>
            {item, itemAll && <Items item={item} itemAll={itemAll} />}
        </>
    )
}