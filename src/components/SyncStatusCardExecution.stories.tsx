import type { Meta, StoryObj } from '@storybook/react'

import SyncStatusCardExecution from './SyncStatusCardExecution'

const meta = {
  title: 'General/SyncStatusCardExecution',
  component: SyncStatusCardExecution,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ height: '25vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SyncStatusCardExecution>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {
  args: {
    synced: 132432,
    total: 200000,
  },
}
export const WithoutData: Story = {
  args: {
    synced: 0,
    total: 0,
  },
}

 
