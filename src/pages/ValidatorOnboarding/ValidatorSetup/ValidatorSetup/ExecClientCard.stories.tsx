import type { Meta, StoryObj } from '@storybook/react'

import ExecClientCard from './ExecClientCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ExecClientCard',
  component: ExecClientCard,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ExecClientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Nethermind: Story = {
  args: { name: 'Nethermind', icon: '/icons/nethermind-circle.png' },
}

export const Besu: Story = {
  args: { name: 'Besu', icon: '/icons/hyperledger-besu-circle.png' },
}

export const Geth: Story = {
  args: { name: 'Geth', icon: '/icons/gethereum-mascot-circle.png' },
}

export const Erigon: Story = {
  args: { name: 'Erigon', icon: '/icons/erigon-circle.png' },
}

export const Nimbus: Story = {
  args: { name: 'Nimbus', icon: '/icons/nimbus-disabled.svg' },
}
