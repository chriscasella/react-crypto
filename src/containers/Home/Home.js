import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import CryptoListContainer from './CryptoListContainer/CryptoListContainer';

class Home extends Component {
    constructor(){
        super();
    };

    render(){
        return(
        <div>
            {/* <Nav /> */}
            <CryptoListContainer></CryptoListContainer>
        </div>
        )
    };
    
}

export default Home