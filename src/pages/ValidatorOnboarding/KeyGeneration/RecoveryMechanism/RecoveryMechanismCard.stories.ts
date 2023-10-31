import type { Meta, StoryObj } from '@storybook/react'

import RecoveryMechanismCard from './RecoveryMechanismCard'
import { BOTH_KEY_AND_RECOVERY, KEYSTORE_FILES, RECOVERY_PHRASE } from '../../../../constants'

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

export const KeystoreFiles: Story = {
  args: {
    value: KEYSTORE_FILES,
    recoveryMechanism: KEYSTORE_FILES,
    icon: 'keystore-files-icon.svg',
  },
}

export const RecoveryPhrase: Story = {
  args: {
    value: RECOVERY_PHRASE,
    recoveryMechanism: RECOVERY_PHRASE,
    icon: 'recovery-phrase-icon.svg',
  },
}

export const BothKeyAndRecovery: Story = {
  args: {
    value: BOTH_KEY_AND_RECOVERY,
    recoveryMechanism: BOTH_KEY_AND_RECOVERY,
    icon: 'both-recovery-keystore-icon.svg',
  },
}

export const NotSelected: Story = {
  args: {
    value: KEYSTORE_FILES,
    recoveryMechanism: '',
    icon: 'keystore-files-icon.svg',
  },
}

export const WithoutValue: Story = {
  args: {
    value: '',
    recoveryMechanism: KEYSTORE_FILES,
    icon: '',
  },
}
