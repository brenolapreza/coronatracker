import {NavPagination, UlPagination} from './paginationStyle';

export default function Pagination({ postsPerPage, totalPosts, paginate }){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <NavPagination>
            <UlPagination>
                {pageNumbers.map(function(item){
                    return <a onClick={() => paginate(item)} href="/listar/#"><li>{item}</li></a>
                })}
            </UlPagination>
        </NavPagination>
    )
}