import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

const NewsContainerItem = (props) => {
    const a = props.article;
    let openArticle = () => {
        window.open(a.url);
    }
    return(
        <div className="NewsContainerItem" 
        onClick={openArticle}>
            <img src={a.thumbnail} className="NewsContainerItem__thumbnail"/>
            <div className="NewsContainerItem__text-block">
                {a.title}
            </div>
        </div>
    )

};

export default NewsContainerItem;