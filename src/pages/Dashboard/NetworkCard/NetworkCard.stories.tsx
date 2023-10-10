import type { Meta, StoryObj } from '@storybook/react'

import NetworkCard from './NetworkCard'

const meta = {
  title: 'Dashboard/NetworkCard',
  component: NetworkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NetworkCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { downloadRate: [12, 24, 12, 4, 30, 50], uploadRate: [2, 5, 7, 32, 23, 82] },
}
export const BadStats: Story = {
  args: { downloadRate: [12, 24, 12, 4, 30, 1], uploadRate: [2, 5, 7, 32, 23, 12] },
}
