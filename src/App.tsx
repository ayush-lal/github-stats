import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CenterAlign, GlobalStyles, StatsWrapper } from './styles/GlobalStyles';
import { colours, getData } from './util/util';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const App = () => {
  const [chartData, setChartData] = useState<any>();
  const chartRef = useRef();

  useEffect(() => {
    (async () => {
      setChartData(await getData());
    })();
  }, []);

  const data = {
    labels: chartData?.map(({ label }: any) => {
      return label;
    }),
    datasets: [
      {
        data: chartData?.map(({ value }: any) => {
          return value;
        }),
        backgroundColor: colours,
        borderWidth: 0,
      },
    ],
  };

  const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chartCtx: any) => {
      const ctx = chartCtx.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#22272E';
      ctx.fillRect(0, 0, 1000, 1000);
      ctx.borderRadius = 20;
      ctx.restore();
    },
    legend: {
      labels: {
        color: 'red',
      },
    },
  };

  return (
    <>
      <GlobalStyles />
      <CenterAlign>
        <h1>GitHub Stats</h1>
        <div className='chart'>
          {!chartData ? (
            <p>Loading...</p>
          ) : (
            <StatsWrapper>
              <Doughnut
                ref={chartRef}
                plugins={[plugin]}
                style={{ width: 550 }}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  layout: {
                    padding: 20,
                  },
                  plugins: {
                    legend: {
                      labels: {
                        color: '#ADBAC7',
                      },
                    },
                  },
                  animation: {
                    onComplete: function () {
                      document
                        .getElementById('download')
                        ?.setAttribute(
                          'href',
                          this.toBase64Image('image/png', 1),
                        );
                      // ?.setAttribute('href', this.toBase64Image());
                    },
                  },
                }}
                data={data}
              />
            </StatsWrapper>
          )}
        </div>
        <a style={{ display: 'none' }} id='download' href=''>
          Download
        </a>
      </CenterAlign>
    </>
  );
};

export default App;
