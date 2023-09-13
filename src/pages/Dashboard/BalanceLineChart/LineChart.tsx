import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
);

const years = ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR']

const userGains = [10000, 15000, 17500, 20000, 19000, 23222, 25000, 20000, 20000, 21000, 22300, 21000, 25000]

const data = {
    type: 'line',
    labels: years,
    datasets: [
        {
            data: userGains,
            borderColor: '#1992D7',
            backgroundColor: '#f6fbfd',
            fill: true,
            tension: 0.4,
            pointRadius: 0,

        }
    ],
    options: {
        responsive: true,
        maintainAspectRatio: true,
    }

};

const LineChart = () => {
    return <Line options={data.options} data={data} />;
}

export default LineChart;
