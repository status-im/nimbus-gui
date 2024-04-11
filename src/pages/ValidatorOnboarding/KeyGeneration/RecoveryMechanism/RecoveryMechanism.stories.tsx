import type { Meta, StoryObj } from '@storybook/react'

import RecoveryMechanism from './RecoveryMechanism'
import {
  BOTH_KEY_AND_RECOVERY,
  KEYSTORE_FILES_OPTION,
  RECOVERY_PHRASE_OPTION,
} from '../../../../constants'

const meta = {
  title: 'ValidatorOnboarding/RecoveryMechanism',
  component: RecoveryMechanism,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    recoveryMechanism: {
      options: [
        RECOVERY_PHRASE_OPTION,
        KEYSTORE_FILES_OPTION,
        BOTH_KEY_AND_RECOVERY,
      ],
      control: { type: 'radio' },
      defaultValue: KEYSTORE_FILES_OPTION,
    },
  },
} satisfies Meta<typeof RecoveryMechanism>

export default meta
type Story = StoryObj<typeof meta>

export const KeystoreFiles: Story = {
  args: {
    recoveryMechanism: KEYSTORE_FILES_OPTION,
  },
}

export const RecoveryPhrase: Story = {
  args: {
    recoveryMechanism: RECOVERY_PHRASE_OPTION,
  },
}

export const BothKeystoreAndRecovery: Story = {
  args: {
    recoveryMechanism: BOTH_KEY_AND_RECOVERY,
  },
}

export const WithoutRecMechanism: Story = {
  args: {
    recoveryMechanism: '',
  },
}
