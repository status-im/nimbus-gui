import type { Meta, StoryObj } from '@storybook/react'

import DepositHeader from './DepositHeader'

const meta = {
  title: 'ValidatorOnboarding/DepositHeader',
  component: DepositHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DepositHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isTransactionConfirmation: false,
  },
}

export const TransactionConfirmation: Story = {
  args: {
    isTransactionConfirmation: true,
  },
}
