import type { Meta, StoryObj } from '@storybook/react'

import DepositTitle from './DepositTitle'

const meta = {
  title: 'ValidatorOnboarding/DepositTitle',
  component: DepositTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DepositTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
