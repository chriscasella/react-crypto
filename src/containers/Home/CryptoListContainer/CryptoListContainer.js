import React, { Component } from 'react';
import CryptoListItem from './CryptoListItem/CryptoListItem';
import axios from 'axios';

class CryptoListContainer extends Component {

    constructor(){
        super();
        this.state = {
            marketData : [],
            showData: false
        }
        this.getMarketData = this.getMarketData.bind(this);  
        console.log(this.state);
    }

    getMarketData = () =>{
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD&CMC_PRO_API_KEY=' + process.env.REACT_APP_API)
        .then( res => {
            const marketData = res.data.data;
            this.setState({marketData: marketData});
            console.log(this.state)
        })
    };

    componentWillMount(){
        this.getMarketData();
    };

    render(){

        let cryptoListData = this.state.marketData.map( ele =>{
            return <CryptoListItem name={ele.name} key={ele.id} />
        });
        
        return(
            <div>
            {cryptoListData}
            </div>
        );
    };
};

export default CryptoListContainer;