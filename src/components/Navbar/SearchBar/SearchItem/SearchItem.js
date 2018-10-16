import React from 'react';

const SearchItem = (props) => {
    return(
        <li className="search-list__item">
            <h5> {props.name} </h5>
        </li>
    )
}

export default SearchItem;