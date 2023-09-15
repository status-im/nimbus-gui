
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data: DataItem[] = [
    {

        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {

        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {

        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {

        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {

        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {

        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {

        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

interface DataItem {
    uv: number;
    pv: number;
    amt: number;
}


const UptimeChart = () => {
    return (
        <ResponsiveContainer  >
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                style={{ backgroundColor: '#F0F2F5' }}
            >
                <Bar dataKey="pv" barSize={2} fill="#E95460" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default UptimeChart;
