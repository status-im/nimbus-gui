import type { Meta, StoryObj } from '@storybook/react'

import RecoveryMechanismCard from './RecoveryMechanismCard'

const meta = {
  title: 'ValidatorOnboarding/RecoveryMechanismCard',
  component: RecoveryMechanismCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RecoveryMechanismCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    value: 'Key Files',
    selectedRecoveryMechanism: 'Key Files',
    handleRecoveryMechanismChange: () => {},
  },
}
