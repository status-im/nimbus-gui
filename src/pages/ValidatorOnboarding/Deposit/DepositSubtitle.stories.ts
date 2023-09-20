import type { Meta, StoryObj } from '@storybook/react'

import DepositSubtitle from './DepositSubtitle'

const meta = {
  title: 'ValidatorOnboarding/DepositSubtitle',
  component: DepositSubtitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DepositSubtitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
