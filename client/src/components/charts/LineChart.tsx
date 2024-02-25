import { useEffect, useRef } from 'react';
import {Chart,ChartData} from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const chartData = {
      labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      datasets: [
        {
          label: '',
          data: [860, 5830, 1060, 1060, 3070, 2478, 4110, 1330, 2210, 7830, 2478, 6100, 4520, 1680, 3150, 5240, 9460, 3800, 2950, 6790, 1400],
          borderWidth: 1,
          borderColor: '#4acd8d',
        }
      ],
    };
  
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
  
      if (ctx) {
        // Destroy the previous chart instance if it exists
        Chart.getChart(chartRef.current)?.destroy();
  
        // Create a new chart
        new Chart(ctx, {
          type: 'line',
          data: chartData as ChartData,
          options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
              },
              y: {
                type: 'linear',
               
                position: 'left',
              },
            },
            plugins: {
              legend:{
                display:false,
              },
              title: {
                display: false,
              },
            },
            interaction: {
              intersect: false, 
            },
          
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} id="myChart"  style={{ maxWidth: '400px', maxHeight: '150px' }} />;
};

export default MyChart;
