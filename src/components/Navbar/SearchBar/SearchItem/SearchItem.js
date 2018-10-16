import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    return(
        <li className="search-list__item">
        <Link to={"/" + props.symbol} style={{textDecoration: 'none'}}>
             {props.name} ({props.symbol})
        </Link>
        </li>
    )
}

export default SearchItem;