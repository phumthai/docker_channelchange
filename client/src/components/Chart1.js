import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    let startDate = sdate.split(' to ')[0]
    let endDate = sdate.split(' to ')[1]
    var fdate="";
    if(sdate==="3-days"||sdate==="7-days"||sdate==="30-days"){
      fdate = "day";
    }
    else if(startDate===endDate){
      fdate = "hour";
    }else if(Date.parse(endDate)-Date.parse(startDate)<2592000000){
      fdate = "day";
    }else{
      fdate = "month";
    }
    return (
      <div className="chart">

        <Line
          data={this.state.chartData}
          options={{
            responsive: true,
            title:{
              display:this.props.displayTitle,
              text:'Most time '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            scales:{
              x:{
                type: 'time',
                time: {
                  unit: fdate
                  
                }
              },
              y: {
                beginAtZero: true
              }
            }
          }}
        />

      </div>
    )
  }
}

export default Chart;