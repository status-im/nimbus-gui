import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ActivationSyncCard from './ActivationSyncCard'

const meta = {
  title: 'ValidatorOnboarding/ActivationSyncCard',
  component: ActivationSyncCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const MaxValue: Story = {
  args: {
    gaugeColor: '#2a4af5',
    gaugeSynced: 172.503,
    gaugeTotal: 172.503,
  },
}

export const OverMaxValue: Story = {
  args: {
    gaugeColor: '#2a4af5',
    gaugeSynced: 200,
    gaugeTotal: 172.503,
  },
}

export const MinValue: Story = {
  args: {
    gaugeColor: '#2a4af5',
    gaugeSynced: 0,
    gaugeTotal: 172.503,
  },
}

export const UnderMinValue: Story = {
  args: {
    gaugeColor: '#2a4af5',
    gaugeSynced: -100,
    gaugeTotal: 172.503,
  },
}
