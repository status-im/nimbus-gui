import type { Meta, StoryObj } from '@storybook/react'

import DeviceStorageHealth from './DeviceStorageHealth'

const meta = {
  title: 'Device Health/DeviceStorageHealth',
  component: DeviceStorageHealth,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceStorageHealth>

export default meta
type Story = StoryObj<typeof meta>

export const GoodStats: Story = {
  args: {
    storage: 10,
    maxStorage: 20,
  },
}

export const BadStats: Story = {
  args: {
    storage: 20,
    maxStorage: 20,
  },
}
