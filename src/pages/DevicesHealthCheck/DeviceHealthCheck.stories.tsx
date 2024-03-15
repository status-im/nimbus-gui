import type { Meta, StoryObj } from '@storybook/react'

import DevicesHealthCheck from './DevicesHealthCheck'

const meta: Meta = {
  title: 'Pages/DevicesHealthCheck',
  component: DevicesHealthCheck,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type DevicesHealthCheckStory = StoryObj<typeof DevicesHealthCheck>

export const Page: DevicesHealthCheckStory = {
  args: {},
}
