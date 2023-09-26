import type { Meta, StoryObj } from '@storybook/react'

import ConsensusClientCard from './ConsensusClientCard'

const meta = {
  title: 'Dashboard/ConsensusClientCard',
  component: ConsensusClientCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConsensusClientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 200000, total: 123562 },
}
