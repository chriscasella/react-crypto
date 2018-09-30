import React from 'react';

const CryptoListItem = (props) => {
    const coin = props.coinData;
    return(
        <div>
            {coin.name}
        </div>
    )
}

export default CryptoListItem;