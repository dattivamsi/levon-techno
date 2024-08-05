import React from 'react';
import { Chart } from 'react-google-charts';
import './Widget.css';

const PieChartWidget = ({ data }) => {
  const chartData = [
    ['Demographic', 'Percentage'],
    ...data.map(item => [item.demographic, item.percentage])
  ];

  return (
    <div className="widget">
      <h2>User Demographics</h2>
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        options={{
          pieHole: 0.4,
        }}
      />
    </div>
  );
};

export default PieChartWidget;
