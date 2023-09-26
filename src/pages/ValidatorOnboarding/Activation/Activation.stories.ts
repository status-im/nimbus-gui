import type { Meta, StoryObj } from '@storybook/react'

import Activation from './Activation'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/Activation',
  component: Activation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Activation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validatorsValue: '4',
    executionSyncStatus1: {
      text: 'Execution Sync Status',
      isGaugeIncluded: true,
      gaugeColor: '$blue',
      gaugeSynced: 123.524,
      gaugeTotal: 172.503,
    },
    executionSyncStatus2: {
      text: 'Execution Sync Status',
      isGaugeIncluded: true,
      gaugeColor: '$red',
      gaugeSynced: 123.524,
      gaugeTotal: 172.503,
    },
    currentAPRValue: '4.40%',
    estimatedActivationTimeValue: '32 Days',
    validatorQueueValue: '92603',
  },
}
