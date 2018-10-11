import React, {Component} from 'react';
import axios from 'axios';



class Coin extends Component {
    constructor(props){
        super();
    }

    getCoinData = () => {
        // console.log(this.props, this.props.match.params.coin)
        const param = this.props.match.params.coin;
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + param + '&convert=USD&CMC_PRO_API_KEY=' + process.env.REACT_APP_API)
        .then(res => {
            console.log('this is a coin!', res);
        })
    }

    componentWillMount(){
        this.getCoinData();
    };


    render(){
        return(
            <div>
                Hello from Coin!
            </div>
        )
    }
}

export default Coin;