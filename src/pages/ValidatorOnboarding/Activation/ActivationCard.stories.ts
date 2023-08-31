import type { Meta, StoryObj } from '@storybook/react'

import ActivationCard from './ActivationCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ActivationCard',
  component: ActivationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ActivationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Validators: Story = {
  args: {
    text: 'Validators',
    value: '4',
  },
}

export const ExecutionSyncStatus: Story = {
  args: {
    text: 'Execution Sync Status',
    value: '',
    isGaugeIncluded: true,
    gaugeColor: '#2a4af5',
    gaugeSynced: 123.524,
    gaugeTotal: 172.503,
  },
}

export const ExecutionSyncStatusRed: Story = {
  args: {
    text: 'Execution Sync Status',
    value: '',
    isGaugeIncluded: true,
    gaugeColor: '#EB5757',
    gaugeSynced: 123.524,
    gaugeTotal: 172.503,
  },
}

export const CurrentAPR: Story = {
  args: {
    text: 'Current APR',
    value: '4.40%',
  },
}

export const EstimatedActivationTime: Story = {
  args: {
    text: 'Estimated Activation Time',
    value: '32 Days',
  },
}

export const ValidatorQueue: Story = {
  args: {
    text: 'Validator Queue',
    value: '92603',
  },
}

export const WithoutTitle: Story = {
  args: {
    text: '',
    value: '1',
  },
}

export const WithoutValue: Story = {
  args: {
    text: 'Title',
  },
}
