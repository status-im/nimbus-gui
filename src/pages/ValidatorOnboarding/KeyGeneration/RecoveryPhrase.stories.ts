import type { Meta, StoryObj } from '@storybook/react'

import RecoveryPhrase from './RecoveryPhrase'

const meta = {
  title: 'ValidatorOnboarding/RecoveryPhrase',
  component: RecoveryPhrase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RecoveryPhrase>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isKeystoreFiles: false,
  },
}
