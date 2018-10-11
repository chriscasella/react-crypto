import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

const NewsContainerItem = (props) => {
    const a = props.article;
    const openArticle = () => {
        window.open(a.url);
    };
    //if coins are mentioned in the article to appear bottom of card
    const coinsMentioned = a.coins.map( ele => <div key={ele._id} className="NewsContainerItem__coin-badge">{ele.tradingSymbol}</div> );

    return(
        <div className="NewsContainerItem" 
             onClick={openArticle}>
            <img src={a.thumbnail} className="NewsContainerItem__thumbnail"/>
            <div className="NewsContainerItem__text-block">
                {a.title}
            </div>
            {
                a.coins.length > 0 ? <div className="small-text">{coinsMentioned}</div> : null
            }
        </div>
    )

};

export default NewsContainerItem;