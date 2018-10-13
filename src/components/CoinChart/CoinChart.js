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
                dataLabels: {
                    enabled: false
                },
                theme: {
                    palette: 'palette8', 
                    monochrome: {
                        enabled: false,
                        color: '#255aee',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: []
                 },
                tooltip: {
                    x: {
                        format: 'MM/dd/yy HH:mms'
                    }
                }
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'left'
            },
            series: [
                {
                    name: null,
                    data: []
                }
            ]
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
            const newDate = new Date(el.time * 1000).toString();
            dates.push(newDate);
            close.push(el.close);

        });
        // console.log(dates, close);
        //vars for setting nested  state
        const series = [...this.state.series];
        const options = {
            ...this.state.options

        }
        series[0].name = 'Close';
        //spread operator for array of el.close data
        series[0].data =[...close];
        //targeting nested object from spread of this.state.options
        options.xaxis.categories = [...dates];
        // console.log(series, categories)
        this.setState({ series, options});
        console.log(this.state)
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
                    <Chart options={this.state.options} series={this.state.series} type="area" bwidth={500} height={320} /> :
                    <BounceLoader color="#26A65B" size="16px" margin="4px" /> 
                }
            </div>
        )
    }

}

export default CoinChart;