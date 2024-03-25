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
  args: {
    icon: '/icons/small-warn.png',
    iconText: 'Good',
    count: 234,
    type: 'WRN',
  },
}
