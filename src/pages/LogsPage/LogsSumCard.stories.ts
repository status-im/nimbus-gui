import type { Meta, StoryObj } from '@storybook/react'

import LogsSumCard from './LogsSumCard'

const meta = {
  title: 'LogsPage/LogsSumCard',
  component: LogsSumCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsSumCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { count: 234, type: 'WRN', countActive: 23, countInactive: 211 },
}
