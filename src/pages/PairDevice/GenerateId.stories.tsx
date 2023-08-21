import type { Meta, StoryObj } from '@storybook/react'

import GenerateId from './GenerateId'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Pair Device/GenerateId',
  component: GenerateId,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof GenerateId>

export default meta
type Story = StoryObj<typeof meta>

export const GenerateIdNotAwaiting: Story = {
  args: {
    isAwaitingPairing: false,
  },
}

export const GenerateIdAwaiting: Story = {
  args: {
    isAwaitingPairing: true,
  },
}
