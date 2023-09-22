import type { Meta, StoryObj } from '@storybook/react'

import ConnectDevicePage from './ConnectDevicePage'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Connect-Device/ConnectDevicePage',
  component: ConnectDevicePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ConnectDevicePage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
