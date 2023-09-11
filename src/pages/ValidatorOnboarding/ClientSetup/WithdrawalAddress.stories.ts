import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import WithdrawalAddress from './WithdrawalAddress'

const meta = {
  title: 'ValidatorOnboarding/WithdrawalAddress',
  component: WithdrawalAddress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof WithdrawalAddress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Withdrawal Address',
  },
}

export const WithoutTitle: Story = {
  args: {
    title: '',
  },
}
