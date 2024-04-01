import type { Meta, StoryObj } from '@storybook/react'

import DepositStatus from './DepositStatus'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Manage Validator/DepositStatus',
  component: DepositStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof DepositStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
