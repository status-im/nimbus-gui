import type { Meta, StoryObj } from '@storybook/react'

import TransactionStatus from './TransactionStatus'

const meta = {
  title: 'ValidatorOnboarding/TransactionStatus',
  component: TransactionStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TransactionStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    transactionStatus: '',
    isTransactionConfirmation: false,
  },
}

export const Complete: Story = {
  args: {
    transactionStatus: 'Complete',
    isTransactionConfirmation: true,
  },
}

export const Pending: Story = {
  args: {
    transactionStatus: 'Pending',
    isTransactionConfirmation: true,
  },
}

export const Fail: Story = {
  args: {
    transactionStatus: 'Fail',
    isTransactionConfirmation: true,
  },
}
