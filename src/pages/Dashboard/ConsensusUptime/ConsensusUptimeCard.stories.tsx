import type { Meta, StoryObj } from '@storybook/react'

import ConsensusUptimeCard from './ConsensusUptimeCard'

const meta = {
  title: 'Dashboard/ConsensusUptimeCard',
  component: ConsensusUptimeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConsensusUptimeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
