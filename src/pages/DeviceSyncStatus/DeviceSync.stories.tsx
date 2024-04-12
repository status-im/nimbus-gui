import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import DeviceSyncStatus from './DeviceSyncStatus'

const meta = {
  title: 'Pages/DeviceSyncStatus',
  component: DeviceSyncStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ height: '100%', width: '100%' }}>
        <Story />
      </div>
    ),
    withRouter(),
  ],
} satisfies Meta<typeof DeviceSyncStatus>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {
  args: {},
}
