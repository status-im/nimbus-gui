import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import 'chartjs-plugin-gradient'
import { Stack } from 'tamagui'

ChartJS.register(ArcElement, Tooltip, Legend)

const options: ChartOptions<'doughnut'> = {
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
}

const DoughnutChartHalf = () => {
  const data = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: function (context: any) {
          const chart = context.chart
          const { ctx, chartArea } = chart

          if (!chartArea) {
            // This case happens on initial chart load
            return null
          }
          // Create the gradient for the first dataset (90%)
          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0,
          )
          gradient.addColorStop(0.0024, '#FF7D46')
          gradient.addColorStop(0.6216, '#FFA800')
          gradient.addColorStop(0.9406, '#1992D7')

          return [gradient, '#F5F6F8']
        },
      },
    ],
    labels: ['Gradient', 'Solid'],
  }

  return (
    <Stack width={'100px'} height={'100px'} padding={0} margin={0}>
      <Doughnut data={data} options={options} />
    </Stack>
  )
}

export default DoughnutChartHalf
