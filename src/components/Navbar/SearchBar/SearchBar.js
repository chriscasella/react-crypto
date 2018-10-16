import React, { Component } from 'react';
import SearchItem from './SearchItem/SearchItem';

class SearchBar extends Component {
    constructor(props){
        super();
        this.state = {
            typedCoin: '',
            coinList : props.coinList
        };
        console.log('these are props', this.state.coinList)
    };

    componentDidMount(){

    };

    handleSelect = (event) =>{
        const val = event.target.value;
        this.setState({typedCoin: val});
    };

    render(){
        const copiedCoins = [...this.state.coinList];
        const filteredCoins = copiedCoins.filter( el => {
            if(this.state.typedCoin.length > 3){
               return el.name.toLowerCase().indexOf(this.state.typedCoin.toLowerCase()) !== -1;
            }
        });
        console.log(filteredCoins)
        return(
            <div>
                <input value={this.state.typedCoin} onChange={this.handleSelect} />
                {   
                    <ul>
                    filteredCoins.map( el => {
                        return <SearchItem key={el.id} name={el.name} symbol={el.symbol} />
                    })
                    </ul>
                }
            </div>
        )
    };
}

export default SearchBar;