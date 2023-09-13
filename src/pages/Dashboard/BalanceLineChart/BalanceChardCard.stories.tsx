import type { Meta, StoryObj } from '@storybook/react'

import BalanceChardCard from './BalanceChardCard'

const meta = {
  title: 'Dashboard/BalanceChardCard',
  component: BalanceChardCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BalanceChardCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
