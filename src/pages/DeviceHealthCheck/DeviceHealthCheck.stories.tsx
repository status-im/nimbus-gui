import type { Meta, StoryObj } from '@storybook/react'

import DeviceHealthCheck from './DeviceHealthCheck'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta = {
  title: 'Pages/DeviceHealthCheck',
  component: DeviceHealthCheck,
  decorators: [withRouter],
  tags: ['autodocs'],
}

export default meta

type DeviceHealthCheckStory = StoryObj<typeof DeviceHealthCheck>

export const Page: DeviceHealthCheckStory = {
  args: {},
}
