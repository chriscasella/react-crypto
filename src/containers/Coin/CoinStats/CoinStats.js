import React from 'react';
import moment from 'moment';


const CoinStats = (props) => {
    const c = props.coinStats;
    //Dynamic styling for percent changes
    const prChngDiff = num => num > 0 ? "positiveColor coinstats__row-item" : "negativeColor coinstats__row-item" ;
    return(
        <div className="coinstats__main">
            <div className="coinstats__main-row">
                <p className="coinstats__row-item"> Last Update: {moment(c.quote.USD.last_updated).format("M-DD-YY HH:MM")} </p>
                <p className="coinstats__row-item"> ± % 1hr </p>
                <p className={`${prChngDiff(c.quote.USD.percent_change_1h)}`}>{c.quote.USD.percent_change_1h} </p>
                <p className="coinstats__row-item"> ± % 24hr </p>
                <p className={`${prChngDiff(c.quote.USD.percent_change_24h)}`}>{c.quote.USD.percent_change_24h} </p>
                <p className="coinstats__row-item"> ± % 1wk </p>
                <p className={`${prChngDiff(c.quote.USD.percent_change_7d)}`}>{c.quote.USD.percent_change_7d} </p>
            </div>
        </div>

    )
}

export default CoinStats;