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
    const Ndata = [];
    
    axios.get('http://localhost:3001/a').then(res=>{
      for (const dataObj of res.data) {
        c.push(dataObj.apgroup);
      }
      r = Object.entries(c);
      for(let i=0;i<r.length;i++){
        s.push(r[i][1]);
      }
      var result = s.reduce((r,c) => (r[c] = (r[c] || 0) + 1, r), {})
      let a = Object.entries(result)
      for(let j=0;j<a.length;j++){
        name.push(a[j][0]);
        count.push(a[j][1]);
      }
      for(let k=0;k<name.length;k++){
        const ddd = {};
        ddd.x = name[k];
        ddd.y = count[k];
        Ndata.push(ddd)
      }
      
    }).catch(err =>{
      console.log(err)
    })
    this.setState({
      chartData:{
        labels: name,
        datasets:[
          {
            label:'Channel 5GHz Frequency',
            data:count,
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
    return (
      
      <div className="App">
        <br/><br/><br/>
        <h1>Most Changed AP</h1>
        <br/>
        <div class="chart-container">
            <Chart chartData={this.state.chartData}  legendPosition="bottom"/>
        </div>
      </div>
    );
  }
}

export default App;