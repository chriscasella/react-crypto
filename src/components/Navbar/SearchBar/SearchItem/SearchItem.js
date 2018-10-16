import React from 'react';

const SearchItem = (props) => {
    return(
        <li className="search-list__item">
             {props.name} ({props.symbol})
        </li>
    )
}

export default SearchItem;