import React, { useState, useEffect, useRef } from 'react';
import { GlobalStyles, CenterAlign } from './styles/GlobalStyles';
import { AiOutlineDownload } from 'react-icons/ai';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { getData } from './util/util';

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
  const chartRef = useRef(null);

  useEffect(() => {
    (async () => {
      setChartData(await getData());
    })();
  }, []);

  if (chartData) {
    // console.log(chartData);
    chartData.map(({ value }: any) => console.log(value));
  }

  const data = {
    labels: chartData
      ? chartData.map(({ label }: any) => {
          return label;
        })
      : null,
    datasets: [
      {
        data: chartData
          ? chartData.map(({ value }: any) => {
              return value;
            })
          : null,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  function download() {
    console.log('test download');
    // const base64Image = chartRef.toBase64Image();
    // console.log(base64Image);
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <CenterAlign>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>
            GitHub Stats{' '}
            <AiOutlineDownload
              onClick={download}
              style={{ verticalAlign: 'bottom' }}
            />
          </h1>
        </div>
        <br />
        <div className='chart'>
          <Doughnut
            ref={chartRef}
            style={{ width: 500 }}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              animation: {
                onComplete: function () {
                  document
                    .getElementById('test')
                    ?.setAttribute('href', this.toBase64Image());
                  // console.log(this.toBase64Image());
                },
              },
            }}
            data={data}
          />
        </div>
        <a id='test' href='https://www.google.com'>
          test
        </a>
        {/* <img src='' id='test' alt=''></img> */}
      </CenterAlign>
    </React.Fragment>
  );
};

export default App;
