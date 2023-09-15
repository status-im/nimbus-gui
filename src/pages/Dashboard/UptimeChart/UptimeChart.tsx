
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data: DataItem[] = [
    {
        pv: 1,
        pa: 1
    },
    {

        pv: 0,
        pa: 0
    },
    {

        pv: 1,
        pa: 0
    },
    {

        pv: 0,
        pa: 0
    },
    {

        pv: 0,
        pa: 0   
    },
    {
        pv: 1,
        pa: 1
    },
    {
        pv: 1,
        pa: 1
    },
];

interface DataItem {
    pa: number;
    pv: number;
}


const UptimeChart = () => {
    return (
        <ResponsiveContainer  >
            <BarChart
                data={data}
                margin={{
                }}
                style={{ backgroundColor: '#F0F2F5' }}
            >
                <Bar dataKey="pv" barSize={2} fill="#E95460" />
                <Bar dataKey="pa" barSize={2} fill="#E95460" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default UptimeChart;
