import type { Meta, StoryObj } from '@storybook/react'

import SyncStatusCardConsensus from './SyncStatusCardConsensus'

const meta = {
  title: 'General/SyncStatusCardConsensus',
  component: SyncStatusCardConsensus,
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
} satisfies Meta<typeof SyncStatusCardConsensus>

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

 
