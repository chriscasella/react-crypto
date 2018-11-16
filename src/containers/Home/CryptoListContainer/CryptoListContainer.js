import React, { Component } from 'react';
import CryptoListItem from './CryptoListItem/CryptoListItem';
import CryptoListPagination from './CryptoListPagination/CryptoListPagination';
import axios from 'axios';
import './CryptoListContainer.css';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CryptoListContainer extends Component {

    constructor(){
        super();
        this.state = {
            marketData : [],
            activeMarketData: [],
            showData: false,
            paginationMarker: 1,
            wipeButtons: false
        }
        this.getMarketData = this.getMarketData.bind(this);  
        console.log(this.state);
    }
    //parses API response
    getMarketData = () =>{
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD&CMC_PRO_API_KEY=' + process.env.REACT_APP_API)
        .then( res => {
            const marketData = res.data.data;
            const activeMarketData = [...marketData].slice(0, 5);
            this.setState({marketData: marketData, activeMarketData: activeMarketData});
            console.log(this.state);
        })
    };
    //maps table items for JSX
    cryptoListData = () => { 
        const cryptoList = this.state.activeMarketData.map( ele => (
                <CryptoListItem className="" coinData={ele} key={ele.id} />
            )
        )
        return cryptoList;
    };
    //sets JSX of buttons for pagination
    // paginationButtons = () =>{
    //     let s = {...this.state};
    //     /*adjust page number so allows for previous numbers before pagenumber
    //         if left as is, there is no way to traverse backwards
    //     */
    //     let pageNum = s.paginationMarker - 2;
    //     let buttons = [];
    //     let i = 0;
    //     //outer bounds of index, to stop paginating nonexistant pages
    //     pageNum < 0 ? pageNum = 0 : null;
    //     pageNum >= 15 ? pageNum = 15 : null;
    //     while(i < 5){
    //         i++
    //         pageNum++
    //         let boundButton = this.setActivePage.bind(this, pageNum);
    //         buttons.push(
    //             <div className="crypto-container__pagination-button" key={pageNum} onClick={boundButton}>{pageNum}</div>
    //         )
    //     }
    //     let firstPage = 1;
    //     let prevPage;
    //     let nextPage;
    //     let first = 1, last = 20;
    //     if (pageNum <= 5 || pageNum >= 18){
            

    //     } 
    //     nextPage = s.paginationMarker + 1;
    //     prevPage = s.paginationMarker - 1;
    //     const boundPrev = this.setActivePage.bind(this, prevPage)
    //     buttons.unshift(<div className="crypto-container__pagination-button" onClick={boundPrev} key={prevPage}>
    //                         <FontAwesomeIcon
    //                                     icon="angle-left"
    //                                     size="lg"
    //                                     color="grey"
    //                                 />
    //                     </div>)
    //     const boundFirstPage = this.setActivePage.bind(this, firstPage)
    //     buttons.unshift(<div className="crypto-container__pagination-button" onClick={boundFirstPage} key={firstPage}>
    //                         <FontAwesomeIcon
    //                                     icon="angle-double-left"
    //                                     size="lg"
    //                                     color="grey"
    //                                 />
    //                     </div>);
    //     const boundNextPage = this.setActivePage.bind(this, nextPage)
    //     buttons.push(<div className="crypto-container__pagination-button" onClick={boundNextPage} key={next
        
        
    //     Page}>
    //                     <FontAwesomeIcon
    //                                 icon="angle-right"
    //                                 size="lg"
    //                                 color="grey"
    //                             />
    //                 </div>)     
    //     return buttons;

    // }
    //sets the array for the mapped items in table and for pagination numbers
    setActivePage = (pageNum, event) => {
        console.log('pagenum!', pageNum, event)
        const copyMarketData = [...this.state.marketData]
        const p = (pageNum - 1) * 5;
        const newCoins = copyMarketData.slice(p, p + 5)
        this.setState({
            activeMarketData: newCoins,
            paginationMarker: pageNum
           
        });
    }

    componentWillMount(){
        this.getMarketData();
    };

    render(){
        return(
            <div className="crypto-container__main-container">
                <table className="crpyto-container">
                    <thead>
                        <tr className="crypto-container__top-row">
                            <th>
                                Rank
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Symbol
                            </th>
                            <th>
                                Recent Performance
                            </th>
                            <th>
                                Price
                            </th>
                            <MediaQuery minDeviceWidth={1024}>
                            <th>
                                ±1hr
                            </th>
                            <th>
                                ±1Wk
                            </th>
                            </MediaQuery>
                            <th>
                                ±24hr
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.cryptoListData()}
                    </tbody>
                </table>
                <div className="crypto-container__pagination-container">
                <CryptoListPagination 
                    paginationMarker={this.state.paginationMarker}
                    setActivePage={this.setActivePage}
                    
                />
                </div>
            </div>
        );
    };
};

export default CryptoListContainer;