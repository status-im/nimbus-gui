import type { Meta, StoryObj } from '@storybook/react'

import PairedDeviceCard from './PairedDeviceCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/PairedDeviceCard',
  component: PairedDeviceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof PairedDeviceCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
