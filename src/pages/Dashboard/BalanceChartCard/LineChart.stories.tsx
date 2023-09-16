import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from 'tamagui'

import LineChart from './LineChart'
import { years } from '../../../constants'

const userGains = [
  10000, 15000, 17500, 20000, 19000, 23222, 25000, 20000, 20000, 21000, 22300, 21000,
]

const meta = {
  title: 'Dashboard/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    StoryObj => (
      <Stack width={'536px'}>
        <StoryObj />,
      </Stack>
    ),
  ],
} satisfies Meta<typeof LineChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { userGains, years },
}
