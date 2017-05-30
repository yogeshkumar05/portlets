import React, { Component } from 'react';
import demographicJSON from './../common/demographic.json'
import ReactHighcharts from 'react-highcharts'
import HighchartsData from 'highcharts-data'
import HighchartsMore from 'highcharts-more'
import HighchartsDrilldown from 'highcharts-drilldown'

export default class Demograph extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            config: {},
            displayPort: true,
            chartData: []
        };
    }

    componentWillMount()
    {
        let chartData = [];
        demographicJSON.data.map(function (item) {
            let counter = 0
            let obj = {};
            item.map(function (item1) {
                let columnObj = demographicJSON.meta.view.columns[counter];
                obj[columnObj.name] = item1
                counter++;
            })
            chartData.push(obj)
        })
        let aggregateData = [];
        this.categories = [];
        let that = this;
        chartData.map(function (item) {
            let obj = {};
            that.categories.push(item['JURISDICTION NAME'])
            obj.name = item['JURISDICTION NAME']
            obj.y = Number(item['COUNT PARTICIPANTS'])
            obj.drilldown = item['JURISDICTION NAME']
            aggregateData.push(obj)
        })

        this.aggregateData = aggregateData
        let drilldownArray = []
        chartData.map(function (item) {
            let obj = {}
            obj.name = item['JURISDICTION NAME']
            obj.id = item['JURISDICTION NAME']
            let data = [];
            for (let index in item) {
                let arr = []
                if (index.includes('COUNT')) {
                    arr.push(index)
                    arr.push(Number(item[index]))
                    data.push(arr)
                }
            }
            obj.data = data;
            drilldownArray.push(obj)
        })
        this.drilldownArray = drilldownArray
        var chartConfig = {
            chart: {
                type: 'column',
                zoomType: 'x',
                renderTo: this.chart,
                resetZoomButton: {
                    position: {
                        x: 0,
                        y: 0
                    },
                    relativeTo: 'chart'
                }
            },
            title: {
                text: 'Demographic Statistics By Zip Code'
            },
            xAxis: {
                categories: this.categories,
                title: {
                    text: 'Jurisdiction'
                }
            },
            yAxis: {
                title: {
                    text: 'Statistic count'
                }

            },
            credits:{
                enabled:false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 2,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> in numbers<br/>'
            },

            series: [{
                name: 'Demographic statisctics',
                colorByPoint: true,
                data: this.aggregateData
            }],
            drilldown: {
                series: this.drilldownArray
            }
        }
        this.setState({config:chartConfig});

    }

    componentDidMount() {
        HighchartsData(ReactHighcharts.Highcharts)
        HighchartsMore(ReactHighcharts.Highcharts)
        HighchartsDrilldown(ReactHighcharts.Highcharts)
    }

    render() {
        var style;
        style = { display: "none" };


        if (this.state.displayPort) {
            style = { display: "block" };
        }
        return (    
            <div>
                <button className="resizeBtn" onClick={() => { this.setState({ displayPort: true }) }} >+</button>
                <button className="resizeBtn" onClick={() => { this.setState({ displayPort: false }) }} >-</button>
                <div style={style}>
                    <h3>Demograph Portlet</h3>        
                    <ReactHighcharts config={this.state.config} ref="chart"></ReactHighcharts>
          </div>
            </div>)
    }
}

