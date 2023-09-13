import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
);




const data = {
    labels: years,
    datasets: [
        {

            data: userGains,
            fill: true,

        }
    ],

};


const options = {
    responsive: true,
};

const LineChart = () => {
    return <Line options={options} data={data} />;
}

export default LineChart;
