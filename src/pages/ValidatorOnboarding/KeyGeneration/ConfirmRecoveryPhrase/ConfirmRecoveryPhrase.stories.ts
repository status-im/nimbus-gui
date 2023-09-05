import type { Meta, StoryObj } from '@storybook/react'

import ConfirmRecoveryPhrase from './ConfirmRecoveryPhrase'

const meta = {
  title: 'ValidatorOnboarding/ConfirmRecoveryPhrase',
  component: ConfirmRecoveryPhrase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmRecoveryPhrase>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
