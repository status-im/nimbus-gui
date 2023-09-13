import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
const exampleData = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555
    },
    {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234
    }
];
const labelsEx = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels: labelsEx,
    datasets: [
        {
            label: 'Dataset',
            data: exampleData,
            borderColor: 'light-red',
            backgroundColor: 'light-red',
            fill: true,
            start: true,
            origin: true
        }
    ]
};
const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            filler: {
                propagate: false,
            },
            title: {
                display: true,
                text: (ctx: any) => 'Fill: ' + ctx.chart.data.datasets[0].fill
            }
        },
        interaction: {
            intersect: false,
        }
    },
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const LineChart = () => {

    return <Line options={options} data={data} />;

}
export default LineChart;