import type { Meta, StoryObj } from '@storybook/react'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../../redux/store'

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
      <ReduxProvider store={store}>
        <div style={{ height: '100%', width: '100%' }}>
          <Story />
        </div>
      </ReduxProvider>
    ),
  ],
} satisfies Meta<typeof DeviceSyncStatus>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {
  args: {},
}
