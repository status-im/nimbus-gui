import type { Meta, StoryObj } from '@storybook/react'

import DeviceNetworkHealth from './DeviceNetworkHealth'

const meta = {
  title: 'Device Health/DeviceNetworkHealth',
  component: DeviceNetworkHealth,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceNetworkHealth>

export default meta
type Story = StoryObj<typeof meta>

export const GoodStats: Story = {
  args: {
    latency: [55, 31, 5, 14, 20, 81, 50, 34, 12, 50, 4, 90, 56, 35, 59],
  },
}

export const BadStats: Story = {
  args: {
    latency: [55, 31, 5, 14, 20, 81, 50, 34, 12, 50, 4, 90, 56, 35],
  },
}

export const NoStats: Story = {
  args: {
    latency: [],
  },
}
