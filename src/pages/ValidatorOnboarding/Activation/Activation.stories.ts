import type { Meta, StoryObj } from '@storybook/react'

import Activation from './Activation'

const meta = {
  title: 'ValidatorOnboarding/Activation',
  component: Activation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Activation>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
