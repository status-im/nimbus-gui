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
    uploadRate: [1, 4, 23, 61],
    downloadRate: [20, 3, 40, 56],
  },
}

export const BadStats: Story = {
  args: {
    uploadRate: [1, 4, 23, 55],
    downloadRate: [20, 3, 40, 56],
  },
}
