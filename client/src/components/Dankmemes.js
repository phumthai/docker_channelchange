import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let t = [];
    let c = [];
    let tt = [];
    let r = [];
    let s = [];
    let time = [];
    let count = [];
    axios.get('http://localhost:3001/a').then(res=>{
      console.log(res)
      for (const dataObj of res.data) {
        c.push(parseInt(dataObj.channel5));
        t.push(dataObj.name);
        tt.push(dataObj.time);
      }
      r = Object.entries(tt);
      for(var i=0;i<r.length;i++){
        s.push(r[i][1]);
      }
      var result = s.reduce((r,c) => (r[c] = (r[c] || 0) + 1, r), {})
      let a = Object.entries(result)
      for(var j=0;i<a.length;i++){
        time.push(a[j][0]);
        count.push(a[j][1]);
      }
      console.log(time,count)
      setChartData({
        labels: time,
        datasets: [
          {
            label: "Channel Change Frequency",
            data: count,
            backgroundColor: ["rgba(200, 0, 0, 0.6)"],
            borderWidth: 4,
            borderColor: 'red'
          }
        ]
      });
    }).catch(err =>{
      console.log(err)
    })
    
    
    
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Channel Change Frequency Graph</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Channel Change Frequency", display: true },
            scales: {
              yAxes:[
                {
                  ticks:{
                    autoSkip: true,
                    beginAtZero: true
                  }
                }
              ],
              xAxes:[
                {
                  type: 'time',
                  time: {
                    unit: 'hour'
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;