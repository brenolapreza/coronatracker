import React from 'react';
import Items from './items'
import ApiVacina from '../../api/apiVacina'

/* IMPORT COMPONENT STYLE */
import {CirularWrapper} from './style'

/* IMPORT DO MATERIAL */
import { CircularProgress } from '@material-ui/core';


export default function GetItemsVacina() {
    // const [currentPage, setCurrentPage] = React.useState(1);
    const [item, setItem] = React.useState()
    // const postsPerPage = 30

    const [loading, setLoading] = React.useState(true);

    /* HOOK DE EFEITO NA FUNÇÃO DE CHAMADA A API */

    React.useEffect(() => {
        setLoading(true)
       async function fetchData(){
            await ApiVacina.get().then(res => {
                const item = res.data
                 setItem(item)
            })
            setLoading(false)
        }
        fetchData();
    }, [])

    /* VARIAVEIS PARA PAGINAÇÃO */
    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            {/* COMPONENTE LOADING */}

            {loading &&
                <CirularWrapper>
                    <CircularProgress color="primary" thickness={6} size={50}/>
                </CirularWrapper>
            }
            { /* COMPONENTE DE ITEMS E PAGINAÇÃO */}

            {item && <Items item={item}/>}
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={item.length} paginate={paginate} /> */}

        </>
    )
}