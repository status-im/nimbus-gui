import type { Meta, StoryObj } from '@storybook/react'

import Deposit from './Deposit'

const meta = {
  title: 'ValidatorOnboarding/Deposit',
  component: Deposit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Deposit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
