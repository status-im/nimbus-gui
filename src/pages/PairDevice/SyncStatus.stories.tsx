import type { Meta, StoryObj } from '@storybook/react'

import SyncStatus from './SyncStatus'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Pair Device/SyncStatus',
  component: SyncStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof SyncStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isPairing: true,
  },
}
