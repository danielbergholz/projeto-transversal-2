import React, { Component, useState } from 'react'
import Chart from './Chart.js'

class grafico extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {},
    }
  }

  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData()
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: this.props.date,
        datasets: [
          {
            label: 'Real',
            data: this.props.real,
            borderColor: ['rgb(240,128,128)'],
            borderWidth: 1,
            responsive: true,
          },
          {
            label: 'Teste',
            data: this.props.tested,
            borderColor: ['rgb(176,224,230)'],
          },
          {
            label: 'Previsao',
            data: this.props.previsao,
            borderColor: ['rgb(255,69,0)'],
          },
        ],
      },
    })
  }

  render() {
    return (
      <div className="grafico">
        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    )
  }
}

export default grafico
