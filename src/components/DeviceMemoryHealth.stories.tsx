import type { Meta, StoryObj } from '@storybook/react'

import DeviceMemoryHealth from './DeviceMemoryHealth'

const meta = {
  title: 'Device Health/DeviceMemoryHealth',
  component: DeviceMemoryHealth,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceMemoryHealth>

export default meta
type Story = StoryObj<typeof meta>

export const GoodStats: Story = {
  args: {
    currentMemory: [25, 31, 5, 14, 20],
    maxMemory: 64,
  },
}

export const BadStats: Story = {
  args: {
    currentMemory: [25, 31, 5, 14, 80],
    maxMemory: 64,
  },
}
export const EmptyStats: Story = {
  args: {
    currentMemory: [],
    maxMemory:0,
  },
}
