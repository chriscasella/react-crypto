import React from 'react';


const CryptoListItem = (props) => {
    const coin = props.coinData;
    const roundDown = (num) =>{
        return Math.floor(num * 100)/100;
    }
    return(
        <div className="crypto-container__item">
            <span className="bold-text">{coin.name}</span>
            <span className="crypto-container__item-middle ">{roundDown(coin.quote.USD.price)}</span>
            <span className="crypto-container__item-right">{roundDown(coin.quote.USD.percent_change_24h)}</span>
        </div>
    )
}

export default CryptoListItem;