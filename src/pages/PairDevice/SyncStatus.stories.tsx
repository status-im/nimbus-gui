import type { Meta, StoryObj } from '@storybook/react'

import SyncStatus from './SyncStatus'

const meta = {
  title: 'Pages/SyncStatus',
  component: SyncStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SyncStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    isPairing: true,
    onResetTimer: () => {},
  },
}
