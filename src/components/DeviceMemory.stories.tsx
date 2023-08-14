import type { Meta, StoryObj } from '@storybook/react'

import DeviceMemory from './DeviceMemoryHealth'

const meta = {
  title: 'Device Health/DeviceMemory',
  component: DeviceMemory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceMemory>

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
