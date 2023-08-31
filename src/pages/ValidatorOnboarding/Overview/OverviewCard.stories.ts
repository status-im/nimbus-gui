import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import OverviewCard from './OverviewCard'

const meta = {
  title: 'ValidatorOnboarding/OverviewCard',
  component: OverviewCard,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof OverviewCard>

export default meta
type Story = StoryObj<typeof meta>

export const CurrentAPR: Story = {
  args: {
    text: 'Current APR',
    value: '4.40%',
  },
}

export const TotalETHStaked: Story = {
  args: {
    text: 'Total ETH Staked',
    value: '9,451,123',
  },
}

export const EstimatedActivationTime: Story = {
  args: {
    text: 'Estimated Activation Time',
    value: '32 Days%',
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
    value: '92603',
  },
}

export const WithoutValue: Story = {
  args: {
    text: 'Validator Queue',
    value: '',
  },
}

export const WithoutData: Story = {
  args: {
    text: '',
    value: '',
  },
}
