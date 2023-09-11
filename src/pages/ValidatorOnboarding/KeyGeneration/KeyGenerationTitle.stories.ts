import type { Meta, StoryObj } from '@storybook/react'

import KeyGenerationTitle from './KeyGenerationTitle'

const meta = {
  title: 'ValidatorOnboarding/KeyGenerationTitle',
  component: KeyGenerationTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyGenerationTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
