import React from 'react';
import Items from './items'
import Api from '../../api/api'
import Pagination from './pagination'


export default function GetItems() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage, setPostsPerPage] = React.useState(30)

    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        Api.get(`countries`).then(res => {
            const item = res.data
            setItem(item)
        })
    }, [setItem])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <Items item={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={item.length} paginate={paginate} />

        </>
    )
}