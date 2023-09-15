
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// @NOTE: XAxis for months or days
const data: DataItem[] = [
    {
        // @NOTE: if you want to add name in the XAxis. You need to set the names here
        // name: 'Jan',
        pv: 1,
        pa: 1,
    },
    {
        // name: 'Feb',
        pv: 0   ,
        pa: 0
    },
    {
        //name: 'Feb',
        pv: 1,
        pa: 0
    },
    {
        //name: 'Feb',
        pv: 0,
        pa: 0
    },
    {
        //name: 'Feb',
        pv: 0,
        pa: 0
    },
    {
        //name: 'Feb',
        pv: 1,
        pa: 1
    },
    {
        //name: 'Feb',
        pv: 1,
        pa: 1
    },
];

interface DataItem {
    name?: string;
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
                {/* <XAxis dataKey="name" fontSize={'10px'} width={50} /> */}
                <Bar dataKey="pv" barSize={2} fill="#E95460" />
                {/* <XAxis dataKey="name" fontSize={'10px'} width={50} /> */}
                <Bar dataKey="pa" barSize={2} fill="#E95460" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default UptimeChart;
