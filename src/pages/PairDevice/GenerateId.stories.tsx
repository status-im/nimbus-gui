import type { Meta, StoryObj } from '@storybook/react'

import GenerateId from './GenerateId'

// TODO: story crashes because of Link component (tried with useNavigate hook, but it is same)

const meta = {
  title: 'Pair Device/GenerateId',
  component: GenerateId,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
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
