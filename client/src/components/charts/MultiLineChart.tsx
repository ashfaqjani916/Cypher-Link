import { useEffect, useRef } from 'react';
import { Chart, ChartData } from 'chart.js/auto';

const MultiChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const chartData = {
      labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      datasets: [
        {
          label: 'Bitcoin',
          data: [860, 5830, 1060, 1060, 3070, 2478, 4110, 1330, 2210, 7830, 2478, 6100, 4520, 1680, 3150, 5240, 9460, 3800, 2950, 6790, 1400],
          borderWidth: 1,
          borderColor: '#ffcc00', // Bitcoin color
        },
        {
          label: 'Ethereum',
          data: [420, 3000, 510, 910, 1070, 1780, 2310, 930, 1110, 6830, 3878, 5100, 3520, 2480, 3150, 5240, 7460, 2800, 1550, 5790, 1100],
          borderWidth: 1,
          borderColor: '#627eea', // Ethereum color
        },
        {
          label: 'Solana',
          data: [700, 4830, 990, 990, 2570, 1678, 3910, 1130, 3210, 6830, 3478, 7100, 3520, 1980, 2850, 4940, 8160, 3500, 2350, 5590, 1200],
          borderWidth: 1,
          borderColor: '#00c7b7', // Solana color
        },
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
                display: true,
                position: 'bottom',
              },
              y: {
                type: 'linear',
                display: true,
                position: 'left',
              },
            },
            plugins: {
              legend: {
                display: true,
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

  return <canvas ref={chartRef} id="myChart" style={{ maxWidth:'300px',maxHeight:'200px' }} />;
};

export default MultiChart;
