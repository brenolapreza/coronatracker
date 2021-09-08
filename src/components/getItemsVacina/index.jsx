import React from 'react';
import Items from './items'
import Api from '../../api/api'
import Pagination from './pagination'

/* IMPORT COMPONENT STYLE */
import {CirularWrapper} from './style'

/* IMPORT DO MATERIAL */
import { CircularProgress } from '@material-ui/core';


export default function GetItems() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [item, setItem] = React.useState([])
    const postsPerPage = 32

    const [loading, setLoading] = React.useState(true);

    /* FUNÇÃO ASYNC PARA FETCH DOS DADOS UTILIZANDO O AXIOS */
    async function fetchCountries() {
        setLoading(true)
        await Api.get(`countries`).then(res => {
            const item = res.data
            setItem(item)
        })
        setLoading(false)
    }

    /* HOOK DE EFEITO NA FUNÇÃO DE CHAMADA A API */
    React.useEffect(() => {
        fetchCountries();
    }, [])

    /* VARIAVEIS PARA PAGINAÇÃO */
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            {/* COMPONENTE LOADING */}

            {loading &&
                <CirularWrapper>
                    <CircularProgress color="primary" thickness={6} size={50}/>
                </CirularWrapper>
            }
            { /* COMPONENTE DE ITEMS E PAGINAÇÃO */}

            <Items item={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={item.length} paginate={paginate} />

        </>
    )
}