import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, TamaguiProvider } from 'tamagui'
import './App.css'
import { Button as StatusButton, Provider as StatusProvider } from '@status-im/components'

import config from '../tamagui.config'

interface State {
  series: number[]
  options: {
    chart: {
      type: 'donut'
    }

    labels: string[]

    dataLabels: {
      enabled: boolean
    }

    legend: {
      show: boolean
    }

    plotOptions: {
      radialBar: {
        startAngle: number
        endAngle: number

        hollow: {
          size: number | string
        }
        track: {
          show: boolean
        }

        dataLabels: {
          show: boolean
        }
      }
    }

    colors: string[]
  }
}
class ApexChart extends Component<ApexChartProps, State> {
  constructor(props: ApexChartProps) {
    super(props)

    this.state = {
      series: props.series,
      options: {
        chart: {
          type: 'donut',
        },
        labels: [],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          radialBar: {
            startAngle: 240, // Adjust this
            endAngle: 0,
            hollow: {
              size: '70%',
            },
            track: {
              show: false,
            },

            dataLabels: {
              show: false,
            },
          },
        },
        colors: [  '#ea5e78', 'rgba(234, 94, 120, 0)'],
      },
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={'150px'}
        />
      </div>
    )
  }
}
function App() {
  //write function that recieves one number and returns rest to 100 (100 - number)  and pass it to series prop of ApexChart component as an array of two numbers (the number and the result of the function) and then pass it to the App component as a prop (mySeries)
  const num = 30
  const mySeries = [num, 100 - num]
  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <Button size="$6">Tamagui LEL</Button>
        <StatusButton>Status LEL</StatusButton>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
