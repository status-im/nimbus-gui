import type { Meta, StoryObj } from '@storybook/react'

import ConnectedPeers from './ConnectedPeers'

const meta = {
  title: 'Dashboard/ConnectedPeers',
  component: ConnectedPeers,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConnectedPeers>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
