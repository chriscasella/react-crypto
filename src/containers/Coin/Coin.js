import React, {Component} from 'react';
import axios from 'axios';
import CoinChart from '../../components/CoinChart/CoinChart';
import CoinHeader from './CoinHeader/CoinHeader';
import CoinStats from './CoinStats/CoinStats';
import { ScaleLoader } from 'halogenium';

class Coin extends Component {
    constructor(props){
        super();
        this.state = {
            dataLoaded: false,
            coinSymbol: null
        }
    }

    getCoinData = () => {
        // console.log(this.props, this.props.match.params.coin)
        const param = this.props.match.params.coin;
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + param + '&convert=USD&CMC_PRO_API_KEY=' + process.env.REACT_APP_API)
        .then(res => {
            console.log('this is a coin!', res);
            this.setState({
                coinSymbol: param, 
                dataLoaded: true,
                coinStats: res.data.data[param]
                });
            // console.log(this.state)
        })
    }

    componentDidMount(){
        this.getCoinData();
    };


    render(){
        return(
            <div>
            {
                this.state.dataLoaded ? 
                <CoinHeader  coinStats={this.state.coinStats} /> : 
                <ScaleLoader color="#26A65B" size="16px" margin="4px"/> 
            }
            {
                this.state.dataLoaded ? 
                
                <CoinChart coinSymbol={this.state.coinSymbol} /> : 
                <ScaleLoader color="#26A65B" size="16px" margin="4px"/> 
            }
            {
                this.state.dataLoaded ? 
                <CoinStats coinStats={this.state.coinStats} /> :
                <ScaleLoader color="#26A65B" size="16px" margin="4px"/> 
            }
            </div>
        )
    }
}

export default Coin;