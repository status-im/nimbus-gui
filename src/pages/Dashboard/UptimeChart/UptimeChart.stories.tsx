import type { Meta, StoryObj } from '@storybook/react'

import UptimeChart from './UptimeChart'

const meta = {
  title: 'Dashboard/UptimeChart',
  component: UptimeChart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ height: '20vh', width: '90vh' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UptimeChart>

export default meta
type Story = StoryObj<typeof meta>

export const WithMonths: Story = {
  args: {

    monthlyActivity:[3, 2, 5, 4, 6, 7, 8, 0, 10, 0, 0, 3], startMonth: 0, endMonth: 12, withLabels: true
  },
}
