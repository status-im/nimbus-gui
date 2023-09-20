import type { Meta, StoryObj } from '@storybook/react'

import ConnectWallet from './ConnectWallet'

const meta = {
  title: 'ValidatorOnboarding/ConnectWallet',
  component: ConnectWallet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConnectWallet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
