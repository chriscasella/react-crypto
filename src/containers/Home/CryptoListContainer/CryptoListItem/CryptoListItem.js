import React from 'react';
import MediaQuery from 'react-responsive';


const CryptoListItem = (props) => {
    const coin = props.coinData;
    const roundDown = (num) =>{
        return Math.floor(num * 1000)/1000;
    }

    const percentChangeDiff = num => num > 0 ? "positiveColor" : "negativeColor" ;
    // const positiveColor = {
    //     color: 'green'
    // }
    // const negativeColor = {
    //     color: 'red'
    // }
    return(
        <div className="crypto-container__item">
            {coin.cmc_rank}
            <span className="bold-text">{coin.name}</span>
            <span>{coin.symbol}</span>
            <span className="crypto-container__item-middle ">$ {roundDown(coin.quote.USD.price)}</span>
            {/* Desktop Stats */}
            <MediaQuery minDeviceWidth={1024}>
                <span className="crypto-container__item-desktop"> %1hr</span>
                <span className="crypto-container__item-desktop">{roundDown(coin.quote.USD.percent_change_1h)}</span>
                <span className="crypto-container__item-desktop">%1Wk</span>
                <span className="crypto-container__item-desktop">{roundDown(coin.quote.USD.percent_change_7d)}</span>
            </MediaQuery>
            <span className="crypto-container__item-middle">%24hr</span>
            <span className={percentChangeDiff(coin.quote.USD.percent_change_24h), "crypto-container__item-right"}>{roundDown(coin.quote.USD.percent_change_24h)}</span>
        </div>
    )
}

export default CryptoListItem;