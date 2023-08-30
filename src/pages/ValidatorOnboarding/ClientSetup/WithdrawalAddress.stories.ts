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
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof WithdrawalAddress>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    title: 'Withdrawal Address',
  },
}
