import type { Meta, StoryObj } from '@storybook/react'

import ValidatorBalanceInfoBox from './ValidatorBalanceInfoBox'

const meta = {
  title: 'Deposit/ValidatorBalanceInfoBox',
  component: ValidatorBalanceInfoBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorBalanceInfoBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
