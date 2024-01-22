import type { Meta, StoryObj } from '@storybook/react'

import ValidatorRequest from './ValidatorRequest'

const meta = {
  title: 'ValidatorOnboarding/ValidatorRequest',
  component: ValidatorRequest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorRequest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: '1',
    isTransactionConfirmation: false,
  },
}

export const TransactionConfirmation: Story = {
  args: {
    name: '1',
    isTransactionConfirmation: true,
  },
}

export const BigNumber: Story = {
  args: {
    name: '123456789',
    isTransactionConfirmation: false,
  },
}
