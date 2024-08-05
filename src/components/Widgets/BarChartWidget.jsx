import React from 'react';
import { Chart } from 'react-google-charts';
import './Widget.css';

const BarChartWidget = ({ data }) => {
  const chartData = [
    ['Product', 'Sales'],
    ...data.map(item => [item.product, item.sales])
  ];

  return (
    <div className="widget">
      <h2>Sales Data</h2>
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        options={{
          hAxis: { title: 'Sales' },
          vAxis: { title: 'Product' },
        }}
      />
    </div>
  );
};

export default BarChartWidget;
