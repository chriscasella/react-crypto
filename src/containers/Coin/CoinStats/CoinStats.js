import React from 'react';
import moment from 'moment';
import MediaQuery from 'react-responsive';


const CoinStats = (props) => {
    const c = props.coinStats;
    //Dynamic styling for percent changes
    const prChngDiff = num => num > 0 ? "positiveColor coinstats__row-item" : "negativeColor coinstats__row-item" ;
    const normalizeNum = (x) => {
        x = x.toFixed(2);
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
        <div className="coinstats__main">
            <section className="coinstats__main-row">
            <MediaQuery minDeviceWidth={1024}>
                <p className="coinstats__row-item"> Last Update: {moment(c.quote.USD.last_updated).format("M-DD-YY HH:MM")} </p>
            </MediaQuery>
                <p className="coinstats__row-item"> 1hr ±</p>
                <strong className={`${prChngDiff(c.quote.USD.percent_change_1h)}`}>{c.quote.USD.percent_change_1h} % </strong>
                <p className="coinstats__row-item"> 24hr ± </p>
                <strong className={`${prChngDiff(c.quote.USD.percent_change_24h)}`}>{c.quote.USD.percent_change_24h} % </strong>
                <p className="coinstats__row-item"> 1wk ±</p>
                <strong className={`${prChngDiff(c.quote.USD.percent_change_7d)}`}>{c.quote.USD.percent_change_7d} % </strong>
            </section>
            <section className="coinstats__main-row">
                <p className="coinstats__row-item"> Volume 24hr </p>
                <p className="coinstats__row-item"> {normalizeNum(c.quote.USD.volume_24h)} </p>
                <p className="coinstats__row-item"> Circulating Supply </p>
                <p className="coinstats__row-item"> {normalizeNum(c.circulating_supply)} </p>
            </section>
            <section className="coinstats__main-row">
                <p className="coinstats__row-item"> Total Supply </p>
                <p className="coinstats__row-item"> {normalizeNum(c.total_supply)} </p>
                <p className="coinstats__row-item"> Max Supply </p>
                <p className="coinstats__row-item"> {normalizeNum(c.max_supply)} </p>
            </section>
        </div>

    )
}

export default CoinStats;