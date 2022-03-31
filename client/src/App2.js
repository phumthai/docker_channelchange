import React, { Component } from 'react';
import Chart from './components/Chart2';
import axios from 'axios';
import {useState} from 'react';

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
    let name = [];
    let count = [];
    let Ndata = [];
    let sname = [];
    let scount = [];

    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    let startDate = sdate.split(' to ')[0]
    let endDate = sdate.split(' to ')[1]
    // 164864800000 - 1648512000000 = 172800000
    console.log(Date.parse(startDate))
    console.log(Date.parse(endDate))
    console.log(Date.parse(endDate)-Date.parse(startDate))

    axios.get('http://localhost:3001/aa/'+sdate).then(res=>{
      for (const dataObj of res.data) {
        sname.push(dataObj.apgroup);
        scount.push(dataObj.co);
      }
    }).catch(err =>{
      console.log(err)
    })
    this.setState({
      chartData:{
        labels: sname,
        datasets:[
          {
            label:'Channel 5GHz Frequency',
            data:scount,
            backgroundColor:[
              'rgba(255,0,0, 0.6)',
              'rgba(0,255,0, 0.6)',
              'rgba(0,0,255, 0.6)',
              'rgba(255,255,0, 0.6)',
              'rgba(0,255,255, 0.6)',
              'rgba(255,0,255, 0.6)',
              'rgba(192,192,192, 0.6)',
              'rgba(128,128,128, 0.6)',
              'rgba(128,0,0, 0.6)',
              'rgba(128,128,0, 0.6)',
              'rgba(0,128,0, 0.6)',
              'rgba(128,0,128, 0.6)',
              
            ],
            borderColor: 'black'
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
        <h1>Top 10 Changed AP Area ({sdate})</h1>
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