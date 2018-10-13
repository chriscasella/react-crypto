import React from 'react';

const CoinStats = (props) => {
    const c = props.coinStats;
    console.log(c);
    return (
        <div className="coinstats__main">
            <div className="coinstats__main-row">
                <p>{c.name} ({c.symbol})</p>
                <div className="coinstats__price">
                $ {c.quote.USD.price.toFixed(2)}  
                </div>
            </div>
        </div>
    ); 
}


export default CoinStats;