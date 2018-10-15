import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        }
    };
    render(){
        return(
            <nav className="coin-nav">
                {/* <img src="../../assets/images/home.svg" /> */}
            <SearchBar />
            </nav>
        );
    }
}

export default Navbar;