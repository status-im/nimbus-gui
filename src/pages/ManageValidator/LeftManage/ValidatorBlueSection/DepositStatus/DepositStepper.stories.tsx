import type { Meta, StoryObj } from '@storybook/react'

import DepositStepper from './DepositStepper'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Manage Validator/DepositStepper',
  component: DepositStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof DepositStepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { activeStep: 3 },
}
