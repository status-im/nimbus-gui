import type { Meta, StoryObj } from '@storybook/react'

import SyncStatusCards from './SyncStatusCards'

const meta = {
  title: 'Dashboard/SyncStatusCards',
  component: SyncStatusCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SyncStatusCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
