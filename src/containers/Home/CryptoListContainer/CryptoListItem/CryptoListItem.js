import React from 'react';


const CryptoListItem = (props) => {
    const coin = props.coinData;
    const roundDown = (num) =>{
        return Math.floor(num * 10000)/10000;
    }
    return(
        <div className="crypto-container__item">
            {coin.cmc_rank}
            <span className="bold-text">{coin.name}</span>
            <span>{coin.symbol}</span>
            <span className="crypto-container__item-middle ">{roundDown(coin.quote.USD.price)}</span>
            <span className="crypto-container__item-desktop"> %1hr</span>
            <span className="crypto-container__item-desktop">{roundDown(coin.quote.USD.percent_change_1h)}</span>
            <span className="crypto-container__item-desktop">%1Wk</span>
            <span className="crypto-container__item-desktop">{roundDown(coin.quote.USD.percent_change_7d)}</span>
            <span className="crypto-container__item-right">%24hr</span>
            <span className="crypto-container__item-right">{roundDown(coin.quote.USD.percent_change_24h)}</span>
        </div>
    )
}

export default CryptoListItem;