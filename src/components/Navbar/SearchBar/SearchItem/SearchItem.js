import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

const SearchItem = (props) => {
    return(
        <li className="search-list__item" onClick={() => props.callBack()}>
        <Link to={"/" + props.symbol} className="search-list__link">
             {props.name} ({props.symbol})
        </Link>
        </li>
    )
}

export default SearchItem;