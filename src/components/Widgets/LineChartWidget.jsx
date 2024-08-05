import React from 'react';
import { Chart } from 'react-google-charts';
import './Widget.css';

const LineChartWidget = ({ data }) => {
  const chartData = [
    ['Time', 'Users'],
    ...data.map(item => [item.name, item.uv])
  ];

  return (
    <div className="widget">
      <h2>User Activity</h2>
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        options={{
          hAxis: { title: 'Time' },
          vAxis: { title: 'Users' },
        }}
      />
    </div>
  );
};

export default LineChartWidget;
