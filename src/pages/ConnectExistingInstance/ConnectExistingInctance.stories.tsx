import type { Meta, StoryObj } from '@storybook/react'

import ConnectExistingInstance from './ConnectExistingInstance'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Connect-Device/ConnectExistingInstance',
  component: ConnectExistingInstance,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ConnectExistingInstance>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
