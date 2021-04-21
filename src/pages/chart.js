import { Height } from '@material-ui/icons';
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class Grafico extends React.Component {

    data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho'],
        datasets: [{
            label: 'Ativos Financeiros',
            data: [12, 19, 3, 5, 15, 3],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 5

        }]
    }

    render() {
      return (
          <div>
              <h1>Gráfico de Ativos Financeiros</h1>
              <br></br>
              <Line 
                data={this.data}           
              />
          </div>
      )
    }
  }