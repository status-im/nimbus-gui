import type { Meta, StoryObj } from '@storybook/react'

import ChainParity from './ChainParity'

const meta = {
  title: 'ValidatorOnboarding/ChainParity',
  component: ChainParity,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChainParity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
