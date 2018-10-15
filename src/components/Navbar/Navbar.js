import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            coinList: []
        }
    };

    componentDidMount(){
        this.getCoinList();
    };

    getCoinList = () => {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
        .then( res => {
            console.log('coin list!', res);
        });
    }

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