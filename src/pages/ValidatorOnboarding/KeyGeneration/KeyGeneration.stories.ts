import type { Meta, StoryObj } from '@storybook/react'

import KeyGeneration from './KeyGeneration'

const meta = {
  title: 'ValidatorOnboarding/KeyGeneration',
  component: KeyGeneration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KeyGeneration>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    isConfirmPhraseStage: false,
  },
}
