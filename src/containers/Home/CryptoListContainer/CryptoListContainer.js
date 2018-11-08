import React, { Component } from 'react';
import CryptoListItem from './CryptoListItem/CryptoListItem';
import axios from 'axios';
import './CryptoListContainer.css';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CryptoListContainer extends Component {

    constructor(){
        super();
        this.state = {
            marketData : [],
            activeMarketData: [],
            showData: false
        }
        this.getMarketData = this.getMarketData.bind(this);  
        console.log(this.state);
    }

    getMarketData = () =>{
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD&CMC_PRO_API_KEY=' + process.env.REACT_APP_API)
        .then( res => {
            const marketData = res.data.data;
            const activeMarketData = [...marketData].slice(0, 5);
            this.setState({marketData: marketData, activeMarketData: activeMarketData});
            console.log(this.state);
        })
    };

    cryptoListData = () => { 
        const cryptoList = this.state.activeMarketData.map( ele => (
                <CryptoListItem className="" coinData={ele} key={ele.id} />
            )
        )
        return cryptoList;
    };

    paginationButtons = () =>{
            let buttons = [];
            //100 objects in the array
            let i =0;
            while(i < 20){
                i++
                let boundButton = this.setActivePage.bind(this, i);
                buttons.push(
                    <div className="crypto-container__pagination-button" key={i} onClick={boundButton}>{i}</div>
                )
                
        }
        return buttons;

    }

    setActivePage = (pageNum, event) => {
        console.log('pagenum!', pageNum, event)
        const copyMarketData = [...this.state.marketData]
        const newCoins = copyMarketData.slice((pageNum*5), 5)
        this.setState({
            activeMarketData: newCoins
        })
    }

    componentWillMount(){
        this.getMarketData();
    };

    render(){
        return(
            <div className="crypto-container__main-container">
                <table className="crpyto-container">
                    <thead>
                        <tr className="crypto-container__top-row">
                            <th>
                                Rank
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Symbol
                            </th>
                            <th>
                                Recent Performance
                            </th>
                            <th>
                                Price
                            </th>
                            <MediaQuery minDeviceWidth={1024}>
                            <th>
                                ±1hr
                            </th>
                            <th>
                                ±1Wk
                            </th>
                            </MediaQuery>
                            <th>
                                ±24hr
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.cryptoListData()}
                    </tbody>
                </table>
                <div className="crypto-container__pagination-container">
                {this.paginationButtons()}
                </div>
            </div>
        );
    };
};

export default CryptoListContainer;