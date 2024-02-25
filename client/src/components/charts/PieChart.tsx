import { useEffect, useRef } from 'react';
import { Chart, ChartData } from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const data = {
      labels: [
        'BitCoin',
        'Ehtereum',
        'Solana'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        // Destroy the previous chart instance if it exists
        Chart.getChart(chartRef.current)?.destroy();

        // Create a new chart
        new Chart(ctx, {
          type: 'doughnut',
          data: data as ChartData,
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} id="myChart" style={{ color:'red' ,minWidth: '300px', maxHeight: '150px' }} />;
};

export default PieChart;
