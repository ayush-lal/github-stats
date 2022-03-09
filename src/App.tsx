import React, { useState, useEffect } from 'react';
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
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  function download() {
    console.log('test download');
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
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
            data={data}
          />
        </div>
      </CenterAlign>
    </React.Fragment>
  );
};

export default App;
