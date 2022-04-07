import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from "highcharts-react-official";
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'
import axios from 'axios';
import priceData from './btcdata.json'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      adata: []
    };
  }
  async componentDidMount() {
    let adata = await axios
      .get(
        "http://localhost:3001/ad"
      )
      .then(res => {
        let adata = res.data;
        return adata;
      })
      .catch(err => {
        return err;
      });
      this.setState({adata})
  }
  render() {
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);
    
    const configPrice = {

      plotOptions: {
        series: {
          showInNavigator: true,
          gapSize: 6,

        }
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: `Frequency Change count`
      },
      chart: {
        height: 600,
      },
  
      credits: {
        enabled: false
      },
  
      legend: {
        enabled: true
      },

      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1d',
        }, {
          type: 'day',
          count: 7,
          text: '7d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        },
          {
          type: 'all',
          text: 'All'
        }],
        selected: 4
      },
      series: [{
        name: 'Count',
        type: 'spline',
  
        data: this.state.adata,
        tooltip: {
          valueDecimals: 2
        },
  
      }
      ]
    };
    return (
      <div>
         <HighchartsReact 
          
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options = {configPrice}
         ></HighchartsReact>
      </div>
    )
  }
}