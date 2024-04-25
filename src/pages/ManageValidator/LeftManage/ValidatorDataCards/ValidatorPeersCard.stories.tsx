import type { Meta, StoryObj } from '@storybook/react'

import ValidatorPeersCard from './ValidatorPeersCard'

const meta = {
  title: 'ManageValidator/ValidatorPeersCard',
  component: ValidatorPeersCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorPeersCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Peers',
    value: '67',
  },
}
