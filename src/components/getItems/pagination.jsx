import React from 'react';
import {ButtonListed, DivButtonList, NavPagination, UlPagination} from './paginationStyle';

export default function Pagination({ postsPerPage, totalPosts, paginate }){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    
    const [click, setClick] = React.useState(null)

    return(
        <NavPagination>
            <UlPagination>
                {pageNumbers.map((item, index) => (
                    <ButtonListed 
                    key={index} 
                    onClick={() => paginate(item)} 
                    click={click} href="/listar/#" 
                    className={click === index ? "btn-sucess" : null}>
                        <DivButtonList 
                        onClick={() => setClick(index)}>
                            {item}
                        </DivButtonList>
                    </ButtonListed>
                ))}
            </UlPagination>
        </NavPagination>
    )
}