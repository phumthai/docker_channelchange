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
                  unit: 'day'
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