import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts'

const data: DataItem[] = [
  {
    name: 'Jan',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Feb',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Mar',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Apr',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'May',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },

  {
    name: 'Jun',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Jul',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Aug',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Sep',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Oct',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Nov',
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
  },
  {
    name: 'Dec',
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
  },
]

type DataItem = {
  name: string
  one: number
  two: number
  three: number
  four: number
  five: number
  six: number
  seven: number
  eight: number
  nine: number
  ten: number
}

type UptimeChartProps = {
  monthlyActivity: number[]
  startMonth: number
  endMonth: number
  withLabels: boolean
}

const keys = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

const updateMonthlyValues = (data: any, monthlyActivity: any) => {
  for (let i = 0; i < data.length; i++) {
    const month = data[i]
    const activity = monthlyActivity[i]

    for (let j = 0; j < keys.length; j++) {
      if (j < activity) {
        month[keys[j]] = 1
      } else {
        month[keys[j]] = 0
      }
    }
  }

  return data
}

const UptimeChart = ({ monthlyActivity, withLabels }: UptimeChartProps) => {
  const updatedData = updateMonthlyValues(data, monthlyActivity)

  return (
    <ResponsiveContainer>
      <BarChart data={updatedData} style={{ backgroundColor: '#F0F2F5' }}>
        <Bar dataKey="one" barSize={withLabels ? 10 : 1} fill="#E95460" />
        <Bar dataKey="two" barSize={10} fill="#E95460" />
        <Bar dataKey="three" barSize={10} fill="#E95460" />
        <Bar dataKey="four" barSize={10} fill="#E95460" />
        <Bar dataKey="five" barSize={10} fill="#E95460" />
        <Bar dataKey="six" barSize={10} fill="#E95460" />
        <Bar dataKey="seven" barSize={10} fill="#E95460" />
        <Bar dataKey="eight" barSize={10} fill="#E95460" />
        <Bar dataKey="nine" barSize={10} fill="#E95460" />
        <Bar dataKey="ten" barSize={10} fill="#E95460" />
        {withLabels && <XAxis dataKey="name" fontSize={'10px'} tickMargin={10} height={24} />}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default UptimeChart
