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
  argTypes: {},
  decorators: [withRouter()],
} satisfies Meta<typeof ActivationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    text: 'Execution Sync Status',
    value: '',
    isGaugeIncluded: true,
    gaugeColor: '#2a4af5',
    gaugeSynced: 123.524,
    gaugeTotal: 172.503,
  },
}
