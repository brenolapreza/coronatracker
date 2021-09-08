import React from 'react';
import {ButtonListed, DivButtonList, NavPagination, UlPagination} from './paginationStyle';

export default function Pagination({ postsPerPage, totalPosts, paginate }){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    
    const [click, setClick] = React.useState(null)
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return(
        <NavPagination>
            <UlPagination>
                {pageNumbers.map((item, index) => (
                    <ButtonListed key={index} onClick={() =>{
                        paginate(item)
                        scrollToTop()
                        setClick(index)
                    }} href="#" >
                        <DivButtonList className={click === index ? 'btn-sucess' : null}>{item}</DivButtonList>
                    </ButtonListed>
                ))}
            </UlPagination>
        </NavPagination>
    )
}