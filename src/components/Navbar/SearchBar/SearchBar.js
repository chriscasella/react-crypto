import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super();
        this.state = {
            selectedCoin: '',
            coinList : props.coinList,
            filteredCoins: null
        };
    };

    componentDidMount(){

    };

    handleSelect(event){
        const val = event.target.value;
        const filteredResults = this.state.coinList.filter( el => {
            
        })
    };

    render(){
        return(
            <div>
                <input onChange={this.handleSelect} />
            </div>
        )
    };
}

export default SearchBar;