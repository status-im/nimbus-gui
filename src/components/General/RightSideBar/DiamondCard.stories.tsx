import type { Meta, StoryObj } from '@storybook/react'

import DiamondCard from './DiamondCard'

const meta = {
  title: 'General/DiamondCard',
  component: DiamondCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DiamondCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
