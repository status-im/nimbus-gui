import type { Meta, StoryObj } from '@storybook/react'

import OSCards from './OSCards'

const meta = {
  title: 'ValidatorOnboarding/OSCards',
  component: OSCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OSCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
