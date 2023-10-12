import type { Meta, StoryObj } from '@storybook/react'

import MemoryCard from './MemoryCard'

const meta = {
  title: 'Dashboard/MemoryCard',
  component: MemoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MemoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { currentMemory: [12, 24, 12, 4, 30, 50], maxMemory: 100 },
}
export const BadStats: Story = {
  args: { maxMemory: 60, currentMemory: [2, 5, 7, 32, 23, 12, 89] },
}
