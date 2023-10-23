import type { Meta, StoryObj } from '@storybook/react'

import OSCard from './OSCard'

const meta = {
  title: 'ValidatorOnboarding/OSCard',
  component: OSCard,
  tags: ['autodocs'],
} satisfies Meta<typeof OSCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: '/icons/apple-logo.svg',
    name: MAC,
    isSelected: true,
  },
}
