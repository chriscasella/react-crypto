import React, {Component } from 'react';
import Chart from 'react-apexcharts'

class SparklineChart extends Component {
    constructor(props){
        super();
        this.state = {
            options:{
                colors:["#FF0000"],
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
                    opacity: 0.25,
                    gradient: {
                    enabled: false
                    },
                    shade: 'light',
                    shadeIntensity: .4,
                    type: 'vertical',
                    gradientToColors: true,
                    inverseColors: false,
                    stops: [0, 50, 100]
                },
                tooltip: {
                    enabled:true,
                    followCursor: true,
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
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 200,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }  
            },
            series: [{
                name: 'Close',
                data: props.sparklineData.map( x => x.close )
            }]
        }
    console.log(this.state.series)
    }

    componentDidMount(){
        this.determineChartColor()    
    }

    determineChartColor = () =>{
        let st = [...this.state.series];
        let chart = {...this.state.options}
        const len = st[0].data.length;
        let max = st[0].data[len - 1];
        let min = st[0].data[0];
        if(max >= min){
            //green
            chart.colors = ["#92FF53"];
            this.setState({
                options: chart
            }) 
        }else{
            //red
            chart.colors = ["#FF5757"];
            this.setState({
                options: chart
            }) 
        }
        console.log('STATASTATATATAT',max, min)
    }

    render(){
        return(

            <Chart options={this.state.options} series={this.state.series} type="area" height="50%" />

        )
    }
}

export default SparklineChart;