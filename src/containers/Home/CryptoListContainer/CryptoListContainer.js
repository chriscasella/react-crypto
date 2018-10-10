import React, { Component } from 'react';
import CryptoListItem from './CryptoListItem/CryptoListItem';
import axios from 'axios';
import './CryptoListContainer.css';
import MediaQuery from 'react-responsive';

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
            return <CryptoListItem className="" coinData={ele} key={ele.id} />
        });
        
        return(
            <table className="crpyto-container">
                <tr>
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
                
                {cryptoListData}
                
            </table>
        );
    };
};

export default CryptoListContainer;