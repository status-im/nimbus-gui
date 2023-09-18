import type { Meta, StoryObj } from '@storybook/react'

import UptimeChart from './UptimeChart'

const meta = {
  title: 'Dashboard/UptimeChart',
  component: UptimeChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UptimeChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [],
  },
}
