import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ConnectViaIP from './ConnectViaIP'

const meta = {
  title: 'Pair Device/ConnectViaIP',
  component: ConnectViaIP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ConnectViaIP>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
