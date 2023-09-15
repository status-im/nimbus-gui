import type { Meta, StoryObj } from '@storybook/react'

import BalanceChartCard from './BalanceChartCard'

const meta = {
  title: 'Dashboard/BalanceChartCard',
  component: BalanceChartCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BalanceChartCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
