import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Stack } from 'tamagui'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

type LineChartProps = {
  years: string[]
  userGains: number[]
}

const LineChart = ({ years, userGains }: LineChartProps) => {
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
      },
    ],
  }
  const options = {

    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <Stack >
      <Line data={data} options={options} />
    </Stack>
  )

}

export default LineChart
