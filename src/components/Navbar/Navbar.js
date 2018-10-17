import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            coinList: null
        }
    };

    componentDidMount(){
        this.getCoinList();
    };

    getCoinList = () => {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
        .then( res => {
            console.log('coin list!', res);
            this.createCoinList(res.data.Data);
        });
    }

    createCoinList = (coins) => {
        const c = coins;
        const coinList = [];
        for(var el in c){
            const prop = c[el];
            
            const coinObj = {
                id: null,
                name: null,
                symbol: null
            };
            coinObj.id = prop.Id;
            coinObj.name = prop.CoinName;
            coinObj.symbol = prop.Symbol;
            coinList.push(coinObj);
            
        }
        
        console.log('this is the coinList parsed', coinList);
        this.setState({ coinList: coinList});
    }
    render(){
        return(
            <nav className="coin-nav">
                {/* <img src="../../assets/images/home.svg" /> */}
            <NavLink to="/" className="coin-nav__home"> Home </NavLink>
            {
                this.state.coinList != null ? 
                <SearchBar coinList={this.state.coinList}/> :
                <div>Loading</div>
            }
            </nav>
        );
    }
}

export default Navbar;