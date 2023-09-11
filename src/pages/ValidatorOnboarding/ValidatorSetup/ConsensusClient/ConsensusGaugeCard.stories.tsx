import type { Meta, StoryObj } from '@storybook/react'

import ConsensusGaugeCard from './ConsensusGaugeCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ConsensusGaugeCard',
  component: ConsensusGaugeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ConsensusGaugeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'orange', synced: 140000, total: 200000, title: 'Synced Files'
  },
}
