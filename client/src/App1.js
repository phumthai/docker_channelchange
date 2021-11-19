import React, { Component } from 'react';
import Chart from './components/Chart1';
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
    let time = [];
    let count = [];
    const Tdata = [];
    
    axios.get('http://localhost:3001/a').then(res=>{
      for (const dataObj of res.data) {
        c.push(parseInt(dataObj.channel5));
        tt.push(dataObj.time);
        td.push(dataObj.date)
      }
      for(let x=0;x<td.length;x++){
        t.push(td[x]+"T"+tt[x])
      }
      r = Object.entries(t);
      for(let i=0;i<r.length;i++){
        s.push(r[i][1]);
      }
      var result = s.reduce((r,c) => (r[c] = (r[c] || 0) + 1, r), {})
      let a = Object.entries(result)
      for(let j=0;j<a.length;j++){
        time.push(a[j][0]);
        count.push(a[j][1]);
      }
      for(let k=0;k<time.length;k++){
        const ddd = {};
        ddd.x = time[k];
        ddd.y = count[k];
        Tdata.push(ddd)
      }
      console.log("Not bug, it feature ( ͡° ͜ʖ ͡° )")
    }).catch(err =>{
      console.log(err)
    })
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
    return (
      
      <div className="App">
        <h1>AP Changed Frequency</h1>
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