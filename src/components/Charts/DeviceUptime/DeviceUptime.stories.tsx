import type { Meta, StoryObj } from '@storybook/react'

import DeviceUptime from './DeviceUptime'

const meta = {
  title: 'Dashboard/DeviceUptime',
  component: DeviceUptime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceUptime>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
