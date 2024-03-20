import type { Meta, StoryObj } from '@storybook/react'

import DeviceHealthCheckOnboarding from './DeviceHealthCheckOnboarding'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta = {
  title: 'Pages/DeviceHealthCheckOnboarding',
  component: DeviceHealthCheckOnboarding,
  decorators: [withRouter],
  tags: ['autodocs'],
}

export default meta

type DeviceHealthCheckOnboardingStory = StoryObj<
  typeof DeviceHealthCheckOnboarding
>

export const Page: DeviceHealthCheckOnboardingStory = {
  args: {},
}
