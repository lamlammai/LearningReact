import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from 'recharts';
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: '10:00', "Chua bao gio em quen": 30, "Khi em ngu say": 40, "Dong thoi gian": 22},
        {name: '12:00', "Chua bao gio em quen": 50, "Khi em ngu say": 30, "Dong thoi gian": 33},
        {name: '14:00', "Chua bao gio em quen": 20, "Khi em ngu say": 12, "Dong thoi gian": 67},
        {name: '16:00', "Chua bao gio em quen": 10, "Khi em ngu say": 45, "Dong thoi gian": 43},
        {name: '18:00', "Chua bao gio em quen": 10, "Khi em ngu say": 45, "Dong thoi gian": 43},
        {name: '20:00', "Chua bao gio em quen": 100, "Khi em ngu say": 67, "Dong thoi gian": 45},
        {name: '22:00', "Chua bao gio em quen": 90, "Khi em ngu say": 11, "Dong thoi gian": 25},
        {name: '24:00', "Chua bao gio em quen": 60, "Khi em ngu say": 67, "Dong thoi gian": 21},
        {name: '06:00', "Chua bao gio em quen": 100, "Khi em ngu say": 67, "Dong thoi gian": 45},
        {name: '08:00', "Chua bao gio em quen": 90, "Khi em ngu say": 11, "Dong thoi gian": 25},
        {name: '10:00', "Chua bao gio em quen": 60, "Khi em ngu say": 67, "Dong thoi gian": 21},
      ]
    }
  }

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer className="chart" height={300}>
        <LineChart 
         width={500} 
         height={300} 
         data={data}
        fonSize={20}
         margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <XAxis dataKey="name" stroke="#999" />
        <CartesianGrid strokeDasharray="3 3 0 0"/>
        <Tooltip/>
        <Line type="monotone"  dataKey="Chua bao gio em quen" stroke="#1944bf" activeDot={{r: 6}}/>
        <Line type="monotone" dataKey="Khi em ngu say" stroke="red" activeDot={{r: 6}}/>
        <Line type="monotone" dataKey="Dong thoi gian" stroke="green" activeDot={{r: 6}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;