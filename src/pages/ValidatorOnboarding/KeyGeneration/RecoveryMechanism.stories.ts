import type { Meta, StoryObj } from '@storybook/react'

import RecoveryMechanism from './RecoveryMechanism'

const meta = {
  title: 'ValidatorOnboarding/RecoveryMechanism',
  component: RecoveryMechanism,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RecoveryMechanism>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
