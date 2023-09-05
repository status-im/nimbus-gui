import type { Meta, StoryObj } from '@storybook/react'

import KeyGeneration from './KeyGeneration'

const meta = {
  title: 'ValidatorOnboarding/KeyGeneration',
  component: KeyGeneration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyGeneration>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isConfirmPhraseStage: false,
  },
}

export const ConfirmPhraseStage: Story = {
  args: {
    isConfirmPhraseStage: true,
  },
}
