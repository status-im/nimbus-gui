import { BarChart, Bar, ResponsiveContainer } from 'recharts'
// @NOTE: XAxis for months or days
// @NOTE: XAxis, YAxis, CartesianGrid, Tooltip, Legend, = You can use in wider chart

type DataItem = {
  name?: string
  pa: number
  pv: number
}

type UptimeChartProps = {
  data: DataItem[]
}

const UptimeChart = ({ data }: UptimeChartProps) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} style={{ backgroundColor: '#F0F2F5' }}>
        {/* <XAxis dataKey="name" fontSize={'10px'} width={50} /> */}
        <Bar dataKey="pv" barSize={2} fill="#E95460" />
        {/* <XAxis dataKey="name" fontSize={'10px'} width={50} /> */}
        <Bar dataKey="pa" barSize={2} fill="#E95460" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default UptimeChart
