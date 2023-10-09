import type { Meta, StoryObj } from '@storybook/react'

import ConnectedWallet from './ConnectedWallet'

const meta = {
  title: 'ValidatorOnboarding/ConnectedWallet',
  component: ConnectedWallet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConnectedWallet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
