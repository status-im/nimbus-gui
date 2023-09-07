import type { Meta, StoryObj } from '@storybook/react'

import ConsensusClientCard from './ConsensusClientCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ConsensusClientCard',
  component: ConsensusClientCard,

  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ConsensusClientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'Erigon', icon: '/icons/erigon-circle.png' },
}
