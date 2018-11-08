import React, {Component } from 'react';
import Chart from 'react-apexcharts'

class SparklineChart extends Component {
    constructor(props){
        super();
        this.state = {
            options:{
                xaxis: {
                    type: 'datetime',
                    categories: props.sparklineData.map( x => new Date(x.time * 1000).toString() )
                 },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                    gradient: {
                    enabled: false
                    }
                },
                tooltip: {
                    enabled:true,
                    followCursor: false,
                    onDatasetHover: {
                        highlightDataSeries: false,
                    },
                    x: {
                        format: 'MM/dd/yy'
                    }
                }, 
                markers: {
                    size: 0
                },  
            },
            series: [{
                name: 'Close',
                data: props.sparklineData.map( x => x.close )
            }]
        }
    console.log(this.state.series)
    }

    render(){
        return(

            <Chart options={this.state.options} series={this.state.series} type="line" width="50%"/>

        )
    }
}

export default SparklineChart;