import type { Meta, StoryObj } from '@storybook/react'

import ActivationSyncCard from './ActivationSyncCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ActivationSyncCard',
  component: ActivationSyncCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter()],
} satisfies Meta<typeof ActivationSyncCard>

export default meta
type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    gaugeColor: '#2a4af5',
    gaugeSynced: 123.524,
    gaugeTotal: 172.503,
  },
}

export const Red: Story = {
  args: {
    gaugeColor: '#EB5757',
    gaugeSynced: 123.524,
    gaugeTotal: 172.503,
  },
}
