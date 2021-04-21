import React, { Component, useState } from 'react';
import Chart from './Chart.js';


class grafico extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:{},
    }
  }



  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: this.props.date,
        datasets:[
          {
            label:'Real',
            data:this.props.real,
            borderColor:[
                'rgb(245, 100, 13)'
            ],
            borderWidth: 1,
            responsive: true

          },{
            label:'Teste',
            data: this.props.tested,
            borderColor:[
              'rgb(106,90,205)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
        <div className="grafico">
            <Chart chartData={this.state.chartData} legendPosition="bottom"/>
        </div>
    );
  }
}

export default grafico;