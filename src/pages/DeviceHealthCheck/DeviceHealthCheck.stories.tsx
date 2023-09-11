import type { Meta, StoryObj } from '@storybook/react'

import DeviceHealthCheck from './DeviceHealthCheck'

const meta: Meta = {
  title: 'Pages/DeviceHealthCheck',
  component: DeviceHealthCheck,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type DeviceHealthCheckStory = StoryObj<typeof DeviceHealthCheck>

export const Page: DeviceHealthCheckStory = {
  args: {},
}
