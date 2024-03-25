import type { Meta, StoryObj } from '@storybook/react'

import ValidatorRequest from './ValidatorRequest'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ValidatorRequest',
  component: ValidatorRequest,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
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

export const WithDivider: Story = {
  args: {
    name: '1',
    isTransactionConfirmation: false,
    isWithDivider: true,
  },
}
