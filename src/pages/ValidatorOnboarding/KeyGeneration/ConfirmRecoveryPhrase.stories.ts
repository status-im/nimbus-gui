import type { Meta, StoryObj } from '@storybook/react'

import ConfirmRecoveryPhrase from './ConfirmRecoveryPhrase'

const meta = {
  title: 'ValidatorOnboarding/ConfirmRecoveryPhrase',
  component: ConfirmRecoveryPhrase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ConfirmRecoveryPhrase>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
