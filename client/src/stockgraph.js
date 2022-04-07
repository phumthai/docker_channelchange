import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from "highcharts-react-official";
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'
import axios from 'axios';
import priceData from './btcdata.json'

export default class App extends Component {
  // render() {
  //   const options = {style: 'currency', currency: 'USD'};
  //   const numberFormat = new Intl.NumberFormat('en-US', options);
  //   const storage = require('node-sessionstorage')
  //   var sdate = storage.getItem('date')
  //   let c = [];
  //   let tt = [];
  //   let td = [];
  //   let t = [];
  //   const Tdata = [];
    // axios.get('http://localhost:3001/ac').then(res=>{
    //   for (const dataObj of res.data) {
    //     c.push(parseInt(dataObj.co));
    //     tt.push(Date.parse(dataObj.fulldate));
    //   }
    //   for(let k=0;k<tt.length;k++){
    //     let ddd = [];
    //     ddd.push(tt[k])
    //     ddd.push(c[k])
    //     Tdata.push(ddd)
    //   }
    //     console.log(Tdata)
    // }).catch(err =>{
    //     console.log(err)
    // })

  //   const configData = {
      
  //     yAxis: [{
  //       offset: 20,

  //       labels: {
  //         formatter: function () {
  //           return numberFormat.format(this.value) 
  //         }
  //         ,
  //         x: -15,
  //         style: {
  //           "color": "#000", "position": "absolute"

  //         },
  //         align: 'left'
  //       },
  //     },
        
  //     ],
  //     tooltip: {
  //       shared: true,
  //       formatter: function () {
  //         return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
  //       }
  //     },
  //     plotOptions: {
  //       series: {
  //         showInNavigator: true,
  //         gapSize: 6,

  //       }
  //     },
  //     rangeSelector: {
  //       selected: 1
  //     },
  //     title: {
  //       text: `Channel Change count`
  //     },
  //     chart: {
  //       height: 600,
  //     },
  
  //     credits: {
  //       enabled: false
  //     },
  
  //     legend: {
  //       enabled: true
  //     },
  //     xAxis: {
  //       type: 'date',
  //     },
  //     rangeSelector: {
  //       buttons: [{
  //         type: 'day',
  //         count: 1,
  //         text: '1d',
  //       }, {
  //         type: 'day',
  //         count: 7,
  //         text: '7d'
  //       }, {
  //         type: 'month',
  //         count: 1,
  //         text: '1m'
  //       }, {
  //         type: 'month',
  //         count: 3,
  //         text: '3m'
  //       },
  //         {
  //         type: 'all',
  //         text: 'All'
  //       }],
  //       selected: 4
  //     },
  //     series: [{
  //       name: 'Count',
  //       type: 'spline',
  
  //       data: Tdata,
  //       tooltip: {
  //         valueDecimals: 2
  //       },
  
  //     }
  //     ]
  //   };
  //   return (
  //     <div>
  //       <HighchartsReact
  //           highcharts={Highcharts}
  //           constructorType={"stockChart"}
  //           options={configData}
  //       />
  //     </div>
  //   )
  // }
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
        //data = data.map(el => [el[0] * 1000, el[1]]); // return a new arr with the first number multiplied by 1000, keeping the second number;
        console.log(adata)
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
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    let c = [];
    let tt = [];
    let td = [];
    let t = [];
    let Tdata = [];
    // axios.get('http://localhost:3001/ad').then(res=>{
    //   for (const dataObj of res.data) {
    //     c.push(parseInt(dataObj.co));
    //     tt.push(Date.parse(dataObj.fulldate));
    //   }
    //   for(let k=0;k<tt.length;k++){
    //     let ddd = [];
    //     ddd.push(tt[k])
    //     ddd.push(c[k])
    //     Tdata.push(ddd)
    //   }
    //     console.log(priceData[0])
    //   Tdata = res.data
    //     console.log(Tdata[0])
    // }).catch(err =>{
    //     console.log(err)
    // })
    
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
        text: `Bitcoin stock price`
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
      xAxis: {
        type: 'date',
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
        name: 'Price',
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
         <ReactHighcharts config = {configPrice}></ReactHighcharts>
      </div>
    )
  }
}