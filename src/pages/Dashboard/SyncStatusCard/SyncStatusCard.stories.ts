import type { Meta, StoryObj } from '@storybook/react'

import SyncStatusCard from './SyncStatusCard'

const meta = {
  title: 'Dashboard/SyncStatusCard',
  component: SyncStatusCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SyncStatusCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
