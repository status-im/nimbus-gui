import type { Meta, StoryObj } from '@storybook/react'

import Titles from './Titles'

const meta = {
  title: 'General/Titles',
  component: Titles,
  tags: ['autodocs'],
} satisfies Meta<typeof Titles>

export default meta
type Story = StoryObj<typeof meta>

export const WelcomeTitles: Story = {
  args: {
    title:
      'Welcome, John. This is your complete access to a truly decentralized Web 3.0',
    subtitle:
      'Status Nodes allows you to finally take control and ownership of the services you wish to run in a completely trustless and decentralized manner.',
    isAdvancedSettings: false,
  },
}

export const DeviceHealthCheckTitles: Story = {
  args: {
    title: 'Device Health Check',
    subtitle: 'Configure your device to start Staking on Nimbus',
    isAdvancedSettings: true,
  },
}
