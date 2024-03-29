import type { Meta, StoryObj } from '@storybook/react'

import KeyGenerationHeader from './KeyGenerationHeader'

const meta = {
  title: 'ValidatorOnboarding/KeyGenerationHeader',
  component: KeyGenerationHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyGenerationHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
