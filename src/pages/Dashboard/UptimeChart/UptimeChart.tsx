
const data: DataItem[] = [
  {
    name: 'Jan',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Feb',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Mar',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Apr',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'May',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Aug',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Jun',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Jul',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Sep',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Oct',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Nov',
    'ten': 1,
    'twenty': 1,
    'thirty': 1,
    'forty': 1,
    'fifty': 1,
    'sixty': 1,
    'seventy': 1,
    'eighty': 1,
    'ninety': 1,
    'hundred': 1,
  },
  {
    name: 'Dec',
    'ten': 0,
    'twenty': 0,
    'thirty': 0,
    'forty': 0,
    'fifty': 0,
    'sixty': 0,
    'seventy': 0,
    'eighty': 0,
    'ninety': 0,
    'hundred': 0,
  },
]
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

type DataItem = {
  name: string;
  ten: number;
  twenty: number;
  thirty: number;
  forty: number;
  fifty: number;
  sixty: number;
  seventy: number;
  eighty: number;
  ninety: number;
  hundred: number;
};

type UptimeChartProps = {
  monthlyActivity: number[];
  startMonth: number;
  endMonth: number;
};

const UptimeChart = ({ monthlyActivity, startMonth, endMonth }: UptimeChartProps) => {
  // Transform the data array to have multiple entries for each month
   

  const filteredData = data.slice(startMonth, endMonth + 1);

  return (
    <ResponsiveContainer>
      <BarChart data={filteredData} style={{ backgroundColor: '#F0F2F5' }}>
        <Bar dataKey="ten" barSize={10} fill="#E95460" />
        <Bar dataKey="twenty" barSize={10} fill="#E95460" />
        <Bar dataKey="thirty" barSize={10} fill="#E95460" />
        <Bar dataKey="forty" barSize={10} fill="#E95460" />
        <Bar dataKey="fifty" barSize={10} fill="#E95460" />
        <Bar dataKey="sixty" barSize={10} fill="#E95460" />
        <Bar dataKey="seventy" barSize={10} fill="#E95460" />
        <Bar dataKey="eighty" barSize={10} fill="#E95460" />
        <Bar dataKey="ninety" barSize={10} fill="#E95460" />
        <Bar dataKey="hundred" barSize={10} fill="#E95460" />
        <XAxis dataKey="name" fontSize={'10px'} tickMargin={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UptimeChart;
