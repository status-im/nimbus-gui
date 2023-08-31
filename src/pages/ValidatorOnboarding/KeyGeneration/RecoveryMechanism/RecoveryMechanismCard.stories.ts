import type { Meta, StoryObj } from '@storybook/react'

import RecoveryMechanismCard from './RecoveryMechanismCard'
import { KEYSTORE_FILES } from '../../../../constants'

const meta = {
  title: 'ValidatorOnboarding/RecoveryMechanismCard',
  component: RecoveryMechanismCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RecoveryMechanismCard>

export default meta
type Story = StoryObj<typeof meta>

export const Selected: Story = {
  args: {
    value: KEYSTORE_FILES,
    recoveryMechanism: KEYSTORE_FILES,
    handleRecMechanismChange: () => {},
  },
}

export const NotSelected: Story = {
  args: {
    value: KEYSTORE_FILES,
    recoveryMechanism: '',
    handleRecMechanismChange: () => {},
  },
}

export const WithoutValue: Story = {
  args: {
    value: '',
    recoveryMechanism: KEYSTORE_FILES,
    handleRecMechanismChange: () => {},
  },
}
