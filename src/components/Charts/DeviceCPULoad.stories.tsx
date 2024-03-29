import type { Meta, StoryObj } from '@storybook/react'

import DeviceCPULoad from './DeviceCPULoad'

const meta = {
  title: 'Device Health/DeviceCPULoad',
  component: DeviceCPULoad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceCPULoad>

export default meta
type Story = StoryObj<typeof meta>

export const GoodStats: Story = {
  args: {
    load: [12, 123, 4, 32, 40],
  },
}

export const BadStats: Story = {
  args: {
    load: [12, 34, 81, 90, 91],
  },
}

export const EmptyStats: Story = {
  args: {
    load: [],
  },
}
