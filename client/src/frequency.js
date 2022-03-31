import React, { Component } from 'react';
import Chart from './components/Chart1';
import axios from 'axios';
import {useState} from 'react';
import Dates from './date.js'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }
  


  getChartData(){
    // Ajax calls here
    let c = [];
    let tt = [];
    let td = [];
    let t = [];
    let r = [];
    let s = [];
    let time = [];
    let count = [];
    const Tdata = [];
    let fulldata = [];
    let filldata = [];
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')

    if(sdate==="3-days"||sdate==="7-days"||sdate==="30-days"){
      axios.get('http://localhost:3001/ab/'+sdate).then(res=>{
      for (const dataObj of res.data) {
        c.push(parseInt(dataObj.co));
        tt.push(dataObj.time);
        td.push(dataObj.date)
      }
      //console.log(Date.parse(fulld[1])+(1000*60*60))
      for(let x=0;x<td.length;x++){
        t.push(td[x]+"T"+tt[x])
      }
      for(let k=0;k<t.length;k++){
        const ddd = {};
        ddd.x = t[k];
        ddd.y = c[k];
        Tdata.push(ddd)
      }
        console.log("Not bug, it feature ( ͡° ͜ʖ ͡° )")
      }).catch(err =>{
        console.log(err)
      })
    }
    else{
      axios.get('http://localhost:3001/ab/'+sdate).then(res=>{
      for (const dataObj of res.data) {
        c.push(parseInt(dataObj.co));
        tt.push(dataObj.time);
        td.push(dataObj.date)
      }
      for(let x=0;x<td.length;x++){
        t.push(td[x]+"T"+tt[x])
      }
      for(let k=0;k<t.length;k++){
        const ddd = {};
        ddd.x = t[k];
        ddd.y = c[k];
        Tdata.push(ddd)
      }
        console.log("Not bug, it feature ( ͡° ͜ʖ ͡° )")
      }).catch(err =>{
        console.log(err)
      })
    }
    this.setState({
      chartData:{
        //labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Channel Change Frequency',
            data:Tdata,
            backgroundColor:[
              'rgba(0,0,255, 0.6)'
            ],
            borderColor: 'blue'
          }
        ]
      }
    });
  }

  render() {
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    return (
      
      <div className="App">
        <h1>AP Changed Frequency ({sdate})</h1>
        <p>If graph not show. "Resize" the windows</p>
        <br/>
        <div class="chart-container">
          <Chart chartData={this.state.chartData}  legendPosition="bottom"/>
        </div>
      </div>
    );
  }
}

export default App;