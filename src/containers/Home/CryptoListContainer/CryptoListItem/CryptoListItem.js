import React from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

const CryptoListItem = (props) => {
    const coin = props.coinData;
    const roundDown = (num) =>{
        const twoDecimalPlaces = Math.floor(num * 100)/100;
        const threeDecimalPlaces = Math.floor(num * 1000)/1000;
        //was used for crypto prices to scale on front end display
        if(twoDecimalPlaces < 1){
            return threeDecimalPlaces;
        }
        return twoDecimalPlaces;
    }

    const percentChangeDiff = num => num > 0 ? "positiveColor" : "negativeColor" ;
    return(
        <tr className="crypto-list-item">
            <td>{coin.cmc_rank}</td>
            
            <td className="crypto-list-item__link"><Link to={"/" + coin.symbol} style={{textDecoration: 'none'}}>{coin.name}</Link></td>
            <td className="crypto-list-item__bold-text">{coin.symbol}</td>
          
            <td>$ {roundDown(coin.quote.USD.price)}</td>
            {/* Desktop Stats */}
            <MediaQuery minDeviceWidth={1024}>
            <td>{roundDown(coin.quote.USD.percent_change_1h)}</td>
            <td>{roundDown(coin.quote.USD.percent_change_7d)}</td>
            </MediaQuery>
            <td className={`${percentChangeDiff(coin.quote.USD.percent_change_24h)}`} >
            {roundDown(coin.quote.USD.percent_change_24h)}</td>
        </tr>
    )
}

export default CryptoListItem;