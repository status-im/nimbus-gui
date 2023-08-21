import type { Meta, StoryObj } from '@storybook/react'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../../redux/store' 
import DeviceHealthCheck from './DeviceHealthCheck'

const meta: Meta = {
  title: 'Pages/DeviceHealthCheck',
  component: DeviceHealthCheck,
  decorators: [
    StoryObj => (
      <ReduxProvider store={store}>
        <StoryObj />
      </ReduxProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta

type DeviceHealthCheckStory = StoryObj<typeof DeviceHealthCheck>

export const Page: DeviceHealthCheckStory = {
  args: {},
}
