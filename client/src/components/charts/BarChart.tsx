import { useEffect, useRef } from 'react';
import { Chart, ChartData} from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const labels=['jan','feb','mar','apr','may','jun','jul']
    const data = {
      labels: labels,
      datasets: [{
        label:'Campaigns',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        // Destroy the previous chart instance if it exists
        Chart.getChart(chartRef.current)?.destroy();
        new Chart(ctx, {
          type: 'bar',
          data: data as ChartData,
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} id="myChart" style={{ maxHeight: '150px' }} />;
};

export default BarChart;
