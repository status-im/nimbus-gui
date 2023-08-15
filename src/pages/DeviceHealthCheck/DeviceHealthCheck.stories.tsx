import type { Meta, StoryObj } from '@storybook/react'

import DeviceHealthCheck from './DeviceHealthCheck'

const meta = {
  title: 'Pages/DeviceHealthCheck',
  component: DeviceHealthCheck,
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceHealthCheck>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
