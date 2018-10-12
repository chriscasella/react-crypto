import React, { Component } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts'
import { BounceLoader } from 'halogenium';

class CoinChart extends Component {
    constructor(props){
        super();
        this.state = {
            coinSymbol : props.coinSymbol,
            options: {
                chart: {
                    type : 'area'
                }
            },
            series: [
                {
                    name: null,
                    data: []
                }
            ],
            xaxis: {
                type: 'datetime'
            },
            labels: [] 
        }
    }

    //API Calls
    getDailyData = () => {
        axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=' + this.state.coinSymbol + '&tsym=USD&limit=30')
        .then( res => {
            console.log('chart data!!', res.data)
            this.parseData(res.data.Data)
        })
    }


    //Data Parsing
    parseData(data){
        console.log('got data', data)
        const dates = [];
        const close = [];
        const parsedData = data.forEach( el => {
           const newDate = new Date(el.time * 1000);
            dates.push(newDate);
            close.push(el.close);

        });
        //console.log(dates, close);
        //vars for setting nested  state
        const series = [...this.state.series];
        const labels = {...this.state.options};
        series[0].name = 'Close';
        series[0].data =[...close];
        labels.labels = dates;
        console.log(series, labels)
        this.setState({ series, labels });
    };

    //LifeCycle Hooks
    componentDidMount(){
        this.getDailyData();
    }

    render(){
        return(
            <div>
                Inside CoinChart!
                {
                    this.state.series[0].data.length > 0 ? 
                    <Chart options={this.state.options} series={this.state.series} type="area" width={500} height={320} /> :
                    <BounceLoader color="#26A65B" size="16px" margin="4px" /> 
                }
            </div>
        )
    }

}

export default CoinChart;