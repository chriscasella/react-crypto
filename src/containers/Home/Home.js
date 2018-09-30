import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import CryptoListContainer from './CryptoListContainer/CryptoListContainer';

class Home extends Component {
    constructor(){
        super();
    };
    /*
    TODO:
        install axios and import.

        make http call to api and get the list of currencies.
        save in state as list and pass as props to CryptoListContainer
    */ 
    render(){
        return(
        <div>
            {/* <Nav /> */}
            <CryptoListContainer />
        </div>
        )
    };
    
}

export default Home