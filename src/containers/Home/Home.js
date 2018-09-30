import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import CryptoListContainer from './CryptoListContainer/CryptoListContainer';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            marketData : null
        }
    };

    consoleThis = () => {
        console.log(process.env.REACT_APP_API);
    }
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